import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotesHead = ({ groupId }) => {
    const [groupList, setGroupList] = useState(null);

    const fetchGroup = async () => {
        try {
            const response = await axios.get(`/poketapi/singlegroups/${groupId}`);
            setGroupList(response.data);

        } catch (error) {
            console.error('Error fetching group:', error);
        }
    };
    useEffect(() => {
        if (groupId) {
            fetchGroup();

        }
    }, [groupId]);
    // console.log(groupId)
   
    return (
        <div >
            <div className='notes-head'>

                <div className='notes-header'>
                    {groupList && (
                        <div className="group-item">
                            <div
                                className='name-plate'
                                style={{
                                    backgroundColor: groupList.color,
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%'
                                }}
                            >
                                {groupList.name.charAt(0)}
                            </div>
                            <div className='group-name-head'>
                                <p>{groupList.name}</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default NotesHead
