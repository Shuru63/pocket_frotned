import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Notesform = ({ groupId }) => {
    const [content, setContent] = useState('');
    const [isSendEnabled, setIsSendEnabled] = useState(false);
    const [notes,setNotes]=useState()
    const handleChange = (e) => {
        setContent(e.target.value);
        setIsSendEnabled(e.target.value.trim().length > 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/poketapi/createnotes', { groupId, content });
            setNotes(response.data);
            setContent('');
            setIsSendEnabled(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={handleChange} placeholder="Write your note here..." required />
            <button className='send-btn' type="submit" disabled={!isSendEnabled}><span class="material-symbols-outlined">
send
</span></button>
        </form>
    );
};

export default Notesform
