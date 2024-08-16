import React, {useState, useEffect} from 'react';
import './ProgramacaoForm.css';

const ProgramacaoForm = ({currentProgramacao, onSave}) => {
    const [formState, setFormState] = useState({
        number: '',
        customer: '',
        contract: '',
        // Other fields...
    });

    useEffect(() => {
        if (currentProgramacao) {
            setFormState(currentProgramacao);
        }
    }, [currentProgramacao]);

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);
        setFormState({
            number: '',
            customer: '',
            contract: '',
            // Reset other fields...
        });
    };

    return (
        <>
            <form className="programacao-form" onSubmit={handleSubmit}>
                <label>
                    Ordem de Serviço:
                    <input
                        type="text"
                        name="number"
                        value={formState.number}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cliente:
                    <input
                        type="text"
                        name="customer"
                        value={formState.customer}
                        onChange={handleChange}
                    />
                </label>
                {/* Add other form fields here */}
                <button type="submit">Gerar Programação</button>
            </form>
        </>
    );
};

export default ProgramacaoForm;
