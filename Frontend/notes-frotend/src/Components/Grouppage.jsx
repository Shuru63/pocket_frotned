import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Grouppage = ({ onClose }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [selectedColors, setSelectedColors] = useState([]);

   const[data,setData]=useState()
   const colorOptions = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF', '#33FFFF'];
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/poketapi/creategroups', { name, color });
            setData(response.data);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error creating group:', error);
        }
    };
   
 

    const handleColorClick = (optionColor) => {
        setSelectedColors(optionColor);
        console.log(optionColor)
        setColor(optionColor)
    };
    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Create Group</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Group Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <div className='color-picker'>
                        <span>Color:</span>
                        {colorOptions.map((optionColor, index) => (
                            <div
                                key={index}
                                className={`color-option ${selectedColors === optionColor ? 'selected' : ''}`}
                                style={{ backgroundColor: optionColor }}
                                onClick={() => handleColorClick(optionColor)}
                            ></div>
                        ))}
                        <input 
                            type="color" 
                            value={color} 
                            onChange={(e) => setColor(e.target.value)} 
                            className='color-option'
                        />
                    </div>
                    <button className='create-btn' type="submit">Create</button>
                </form>
                <button className='close-btn' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Grouppage
