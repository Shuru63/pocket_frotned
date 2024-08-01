import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notesform from './Notesform';
import Blankpage from './Blankpage';
import NotesHead from './NotesHead';
const NotesList = ({ groupId,toggleSidebar }) => {
    const [notes, setNotes] = useState([]);
    

    const fetchNotes = async (groupId) => {
        try {
            const response = await axios.get(`/poketapi/getnotes/${groupId}`);
            setNotes(response.data);
           console.log(groupId)
        
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    
   
    useEffect(() => {
        if (groupId) {
            fetchNotes(groupId);
            
        }
    }, [groupId]);
   console.log(groupId)
    return (
        <div>
            {groupId ? (
                <div className='notespage'>
                    
                   <div onClick={toggleSidebar}> <NotesHead groupId={groupId} /></div>
                    <div className='notes-content'>
                        <div className='notes-container'>
                        {notes.length > 0 ? (
                            notes.map(note => (
                                <div key={note._id} className='note-item'>
                                    <p>{note.content}</p>
                                    <small>{new Date(note.createdAt).toLocaleString()}</small>
                                </div>
                            ))
                        ) : (
                            <p>No notes available</p>
                        )}
                        </div>
                    </div>
                    <div className='notes-footer'>
                        <Notesform groupId={groupId} />
                    </div>
                </div>
            ) : (
                <div className='welcome-message'>
                    
                    <Blankpage toggleSidebar={toggleSidebar} />
                </div>
            )}
        </div>
    );
};

export default NotesList;
