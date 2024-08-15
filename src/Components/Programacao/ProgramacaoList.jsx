import React from 'react';
import ProgramacaoItem from './ProgramacaoItem';
import './ProgramacaoList.css';

const ProgramacaoList = ({ programacoes, onEdit, onDelete }) => {
    return (
        <div className="programacao-list">
            {programacoes.map((programacao) => (
                <ProgramacaoItem
                    key={programacao.number}
                    programacao={programacao}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default ProgramacaoList;
