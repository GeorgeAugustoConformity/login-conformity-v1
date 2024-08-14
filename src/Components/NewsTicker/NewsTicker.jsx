import React, { useState, useEffect } from 'react';
import './NewsTicker.css';

const NewsTicker = () => {
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(null);

    const apiKey = 'pub_5084250c69cc87d78fc2ae00b8951fee2254f';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=us`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('API Response:', data); // Log API response
                if (data.results && Array.isArray(data.results)) {
                    setHeadlines(data.results.map(article => article.title));
                } else {
                    throw new Error('Unexpected data format.');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
                setError('Não foi possível buscar as notícias no momento. Por favor, verifique sua chave de API ou tente novamente mais tarde.');
            }
        };

        fetchNews(); // Fetch news initially

        const interval = setInterval(fetchNews, 600000); // Refresh news every 10 minutes

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [apiKey]); // Dependency array includes apiKey to handle updates

    return (
        <div className="news-ticker" aria-live="polite">
            {error ? (
                <div className="ticker-item">{error}</div>
            ) : headlines.length > 0 ? (
                <div className="ticker-wrap">
                    <div className="ticker">
                        {headlines.map((headline, index) => (
                            <div key={index} className="ticker-item">
                                {headline}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="ticker-item">Loading news...</div>
            )}
        </div>
    );
};

export default NewsTicker;
