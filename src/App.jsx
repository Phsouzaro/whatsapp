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
    {chatId: 2, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 3, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 4, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 5, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 6, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 7, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 8, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 9, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 10, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 11, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 12, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'},
    {chatId: 13, title: 'Nome Aqui', image: 'https://thispersondoesnotexist.com/image'}
  ])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className="app-window">
      <div className='sidebar'>
        <header>
          <img className='header--avatar' src="https://www.w3schools.com/howto/img_avatar.png" alt="" title='Avatar'/>
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
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
        
      </div>
    </div>
  );
}

