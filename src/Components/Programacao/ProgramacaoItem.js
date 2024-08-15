import React from 'react';
import './ProgramacaoItem.css';

const ProgramacaoItem = ({ programacao, onEdit, onDelete }) => {
    return (
        <div className="programacao-item">
            <p><strong>Number:</strong> {programacao.number}</p>
            <p><strong>Customer:</strong> {programacao.customer}</p>
            {/* Add other fields here */}
            <button onClick={() => onEdit(programacao)}>Edit</button>
            <button onClick={() => onDelete(programacao.number)}>Delete</button>
        </div>
    );
};

export default ProgramacaoItem;
