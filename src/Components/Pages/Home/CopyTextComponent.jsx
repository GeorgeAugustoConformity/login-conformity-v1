import React from 'react';
import './CopyTextComponent.css';
import { FaCopy } from "react-icons/fa6";

const CopyTextComponent = ({ textRef }) => {
    const copyText = () => {
        const text = textRef.current.innerText;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Texto copiado para área de transferência!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                document.execCommand('copy');
                alert('Text copied to clipboard!');
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }

            document.body.removeChild(textArea);
        }
    };

    return (
        <div className="copy-text-component">
            <button onClick={copyText}><FaCopy/></button>
        </div>
    );
};

export default CopyTextComponent;
