import React, {useRef} from 'react';
import './Home.css';
import Programacao from "../../Programacao/Programacao";
import '../../Programacao/Programacao.css'

const Home = () => {
    const textRef = useRef(null);

    return (
        <div className="home">
            <h2>Dashboard</h2>
            <p ref={textRef}>Welcome to the jungle!</p>
            {/*<CopyTextComponent textRef={textRef} />*/}
            {/*<Programacao/>*/}
        </div>
    );
}

export default Home;
