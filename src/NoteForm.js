import React, { useState } from 'react';
import './styles.css';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [important, setImportant] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      setErrorMessage('¡ Debe Ingresar una descripción para el Post It !'); 
      return;
    }

    const newNote = {
      title,
      description,
      important,
    };

    addNote(newNote);

    setTitle(''); 
    setDescription(''); 
    setImportant(false); 
    setErrorMessage(''); 
  };

  return (
    <center>
      <form className="form-label" onSubmit={handleSubmit}>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {}
        <div className="mb-4">
          <div className="form-row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="Título para su Post It"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Actualizar el valor del título en el estado
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="Descripción de su Post It "
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
              />
            </div>
            <div className="col-auto">
              <label className="form-check-label">
                Nota Importante :
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={important}
                  onChange={(e) => setImportant(e.target.checked)} 
                />
              </label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Agregar Nota
          </button>
        </div>
      </form>
    </center>
  );
};

export default NoteForm;
