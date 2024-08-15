import React, { useState } from 'react';
import ProgramacaoList from './ProgramacaoList';
import ProgramacaoForm from './ProgramacaoForm';
import './Programacao.css';

const Programacao = () => {
    const [programacoes, setProgramacoes] = useState([]);
    const [currentProgramacao, setCurrentProgramacao] = useState(null);

    const handleSave = (programacao) => {
        if (currentProgramacao) {
            // Edit existing
            setProgramacoes(
                programacoes.map((p) =>
                    p.number === programacao.number ? programacao : p
                )
            );
        } else {
            // Add new
            setProgramacoes([...programacoes, programacao]);
        }
        setCurrentProgramacao(null);
    };

    const handleEdit = (programacao) => {
        setCurrentProgramacao(programacao);
    };

    const handleDelete = (number) => {
        setProgramacoes(programacoes.filter((p) => p.number !== number));
    };

    return (
        <div className="programacao-container">
            <ProgramacaoForm
                currentProgramacao={currentProgramacao}
                onSave={handleSave}
            />
            <ProgramacaoList
                programacoes={programacoes}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Programacao;
