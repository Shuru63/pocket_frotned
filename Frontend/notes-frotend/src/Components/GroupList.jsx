import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grouppage from './Grouppage';
import NotesList from './NotesList';
const GroupList = () => {
    const [groupList, setGroupList] = useState([]);
    const [selectedGroupId, setSelectedGroupId] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [showbar, setShowbar] = useState(false);

    const fetchGroupList = async () => {
        try {
            const response = await axios.get('/poketapi/getgroups');
            setGroupList(response.data);

        } catch (error) {
            console.error('Error creating group:', error);
        }
    };

    useEffect(() => {
        fetchGroupList();
    }, []);

    const toggleSidebar = () => {
        setShowbar(!showbar);
    };
    const removeSidebar = (groupid) => {
        setSelectedGroupId(groupid)
        setShowbar(false);
    };
    return (
        <div className='wholepage'>
            <div className={`grouplist ${showbar ? '' : "grouplist-toggle"}`}>
                <div className="group-list">
                    <div className='bar'><span class="material-symbols-outlined" onClick={toggleSidebar}>
                        menu
                    </span></div>
                    <h2>Pokect Notes</h2>
                    <div className="group-list-container">
                        {groupList.length > 0 ? (
                            groupList.map(group => (
                                <div key={group._id} className="group-item"
                                    onClick={() => removeSidebar(group._id)}>
                                    <div className='name-plate' style={{ backgroundColor: group.color, width: '45px', height: '45px', borderRadius: '50%' }}>{group.name.charAt(0)}</div>
                                    <div className='group-name'> <p>{group.name}</p>
                                    </div>

                                </div>
                            ))
                        ) : (
                            <p>No groups available.</p>
                        )}
                    </div>
                    <div className='Create-group'>
                        <button className='Create-group-btn' onClick={() => setShowPopup(true)}><span>&#43;</span></button>

                        {showPopup && <Grouppage onClose={() => setShowPopup(false)} />}
                    </div>
                </div>
            </div>
            <div className={`notelist ${showbar ? "notelist-toggle" : ' '}`}><NotesList groupId={selectedGroupId} toggleSidebar={toggleSidebar} /></div>
        </div>
    );
};

export default GroupList;