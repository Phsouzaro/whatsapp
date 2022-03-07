import React, {useState} from "react";
import './ChatWindow.css'
import EmojiPicker from "emoji-picker-react";

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default ( ) => {
    const [emojiOpen, setEmojiOpen] = useState(false)
    const handleEmojiClick = () => {

    }
    const handleEmojiOpen = () => {
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }
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
            <div className="chatWindow--body">
                
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
                    {emojiOpen && (
                        <div className="chatWindow--btn" onClick={handleCloseEmoji}>
                            <CloseIcon style={{color: '#919191'}}/>
                        </div>
                    )}
                    {!emojiOpen && (
                        <div className="chatWindow--btn" onClick={handleEmojiOpen}>
                            <InsertEmoticonIcon style={{color: '#919191'}}/>
                        </div>
                    )}
                    
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                </div>
                <div className="chatWindow-inputArea">
                    <input className='chatWindow--input' type="text" placeholder="Mensagem"/>
                </div>
                <div className="chatWindow-pos">
                    <div className="chatWindow--btn">
                        <SendIcon style={{color: '#919191'}}/>
                    </div>
                 </div>
            </div>

        </div>
    )
}