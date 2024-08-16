import React from 'react';
import './ProgramacaoItem.css';

const ProgramacaoItem = ({ programacao, onEdit, onDelete }) => {
    return (
        <div className="programacao-item">
            <p><strong>Ordem de Serviço:</strong> {programacao.number}</p>
            <p><strong>Cliente:</strong> {programacao.customer}</p>
            {/* Add other fields here */}
            <button onClick={() => onEdit(programacao)}>Editar</button>
            <button onClick={() => onDelete(programacao.number)}>Deletar</button>
        </div>
    );
};

export default ProgramacaoItem;
