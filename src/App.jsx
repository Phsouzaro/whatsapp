import React, { useState, useEffect } from 'react'
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'COSMO - Meu Amor Trabalho', image: 'https://pps.whatsapp.net/v/t61.24694-24/263030427_151277450632056_7883508245742298529_n.jpg?ccb=11-4&oh=9abe0752ab43ef4342c47fcad3f0b9c9&oe=622C2E82'},
  ])
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState(
    {
      id: 1234, 
      avatar: 'https://pps.whatsapp.net/v/t61.24694-24/259809236_653627532638950_1622774033747924876_n.jpg?ccb=11-4&oh=01_AVwv-9d4H_qyk9640lhIfjwCUXlcHdhf-9QbHwcmPbbxOA&oe=622D65A7', 
      name: 'Pedro Souza'
    }
    )

  return (
    <div className="app-window">
      <div className='sidebar'>
        <header>
          <img className='header--avatar' src={user.avatar} alt="" title='Avatar'/>
          <div className='header--buttons' title='DivBotoes'>
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>

        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize='small' style={{color: '#919191'}}/>
            <input type="search" placeholder='Pesquisar ou começar uma nova conversa' />
          </div>
        </div>
        <div className="chatlist">
          {chatList.map((item, key) => 
          
            (<ChatListItem 
              item={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
              key={key} 
              />
              ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow user={user}/>
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
        
      </div>
    </div>
  );
}

