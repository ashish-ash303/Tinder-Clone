import React from 'react'
import Chat from './Chat';
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
          <Chat name="Sarah" message="Heyy ! How Are u!!!" timestamp="35 minute ago" Profilepic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"/>

           <Chat name="PitBull" message="Heyy ! What's Up !!!" timestamp=" 10 minute ago" Profilepic="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"/>

            <Chat name="Siri " message="Heyy!!!" timestamp="5 minute ago" Profilepic="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg"/>

             <Chat name="Alexa " message="Heyy ! How's Going !!!" timestamp="15 minute ago" Profilepic="https://i.pinimg.com/originals/bc/78/4f/bc784f866bb59587b2c7364d47735a25.jpg"/>
          
            
        </div>
    )
}

export default Chats
