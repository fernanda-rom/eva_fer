import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const StoredNotes = localStorage.getItem('notes');
        if (StoredNotes) {
            setNotes(JSON.parse(StoredNotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    return (
        <div className="app">
            <h1>Notas</h1>
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;




