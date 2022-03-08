import React, {useEffect, useState, useRef} from "react";
import './ChatWindow.css'
import EmojiPicker from "emoji-picker-react";

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MessageItem from './MessageItem'

export default ( { user } ) => {
    const body = useRef();
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [listening, setListening] = useState(false)
    const [list, setList] = useState([{author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}, {author: 123, body: 'bla'}, {author: 123, body: 'bla bla'}, {author: 123, body: 'bla bla bla'}, {author: 1234, body: 'bla bla bla bla'}])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }
    const handleEmojiOpen = () => {
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }
    const handleSendMessage = () => {
        list.push(text)
        console.log(list)
        document.querySelector('.chatWindow--input').value = ''
        console.log(user)
    }
    const handleMicMessage = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript )
            }
            recognition.start();
        }
    }
    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    },[list])
    return(
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerInfo">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/263030427_151277450632056_7883508245742298529_n.jpg?ccb=11-4&oh=9abe0752ab43ef4342c47fcad3f0b9c9&oe=622C2E82" alt="" className="chatWindow--avatar" />    
                    <div className="chatWindow--name">COSMOS - Meu Amor Trabalho</div>
                </div>
                <div className="chatWindow--headerButtons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>  
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>    
                </div>
            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem 
                    key={key}
                    data={item}
                    user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--emojiArea" style={{height: emojiOpen ? '200px':'0px'}}>
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            <div className="chatWindow--footer">
                <div className="chatWindow-pre">
                        <div className="chatWindow--btn" 
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40 : 0}}
                        >
                            <CloseIcon style={{color: '#919191'}}/>
                        </div>
                        <div className="chatWindow--btn" onClick={handleEmojiOpen}>
                            <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}}/>
                        </div>
                    
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                </div>
                <div className="chatWindow-inputArea">
                    <input 
                    className='chatWindow--input' 
                    type="text" 
                    placeholder="Mensagem"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow-pos">
                    {text && 
                        <div 
                        onClick={handleSendMessage}
                        className="chatWindow--btn">
                            
                                <SendIcon style={{color: '#919191'}}/>
                            
                        </div>
                    }
                    {!text &&
                        <div 
                        onClick={handleMicMessage}
                        className="chatWindow--btn">
                            
                                <MicIcon style={{color: listening ? '#009688' : '#919191'}}/>
                            
                        </div>
                    }
                 </div>
            </div>

        </div>
    )
}