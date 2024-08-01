import React from 'react'
import img from '../vectorr-rw.png'
const Blankpage = ({toggleSidebar}) => {
    return (
        <div className='blank-bar'>
            <div className='bar'><span class="material-symbols-outlined" onClick={toggleSidebar}>
                        menu
                    </span></div>
            <div className='blank-page'>
            
                <div className='blank-page-vector'>
                    <div className='vector'>
                        <img src={img} alt="" />
                    </div>
                    <div className='some-line'>
                        <p>Send and receive Messages Without Keeping your Phone Online.</p>
                        <p> Use Pocket Notes on up to 4 Linked devices and 1 mobile phone</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blankpage
