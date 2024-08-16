import React from 'react';
import './Modal.css'; // Import the CSS file for styling

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Confirmar Saída</h2>
                <p>Tem certeza que deseja sair?</p>
                <div className="modal-actions">
                    <button className="modal-button confirm" onClick={onConfirm}>Sim</button>
                    <button className="modal-button cancel" onClick={onClose}>Não</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
