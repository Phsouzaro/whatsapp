import React from "react";
import './ChatListItem.css'

export default ({ item, onClick, active }) => {
    return(
        <div className={`chatListItem ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className='charListItem--avatar' src={item.image} alt="" />
            <div className="chatListItem--lines">
                <div className="charListItem--line">
                    <div className="chatListItem--name">{item.title}</div>
                    <div className="chatListItem--date">19:00</div>
                </div>    
                <div className="charListItem--line">
                <div className="chatListItem--lastMessage">
                    <p>Opa, Tudo bem?, Opa, Tudo bem?, Opa, Tudo bem?, Opa, Tudo bem?, Opa, Tudo bem?, Opa, Tudo bem?, Opa, Tudo bem?</p>
                </div>
                </div>   
            </div>
        </div>
    )
}