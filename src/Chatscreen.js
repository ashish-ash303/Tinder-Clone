import React,{useState} from 'react'
import "./Chatscreen.css";
import Avatar from "@material-ui/core/Avatar";


function Chatscreen() {
    const [input,setInput]=useState("");
    const [messages,setMessages]=useState([{
        name:"Sarah",
        image:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
        message:"Hii! ",

    },{
        name:"Sarah",
        image:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
        message:"Hows it going !! ",
    },{
        message:"Hii Hows It Going !!",
    }
      
    ])
    const handlesend =e =>{
        e.preventDefault();

        setMessages([...messages,{message:input }]);
        setInput("");
    }
    return (
        <div className="chatscreen">
            <p className="chatscreen__timestamp">YOU MATCHED WITH Sarah ON 10/10/2020</p>
            {messages.map((message)=> message.name ?(
                 <div className="chatscreen__message">
                     <Avatar className="chatscreen__pic" alt={message.name} src={message.image}/>
                    <p className="chatscreen__text">{message.message}</p>
                </div>

                ):(
                <div className="chatscrren__message">
                    <p className="chatscreen__textuser">{message.message}</p></div>
        

            ))}
           
                <form  className="chatscreen__input">
                    <input value ={input} onChange={(e)=> setInput(e.target.value)}className=
                    "chatscreen__inputfiled" placeholder="Type a message..." type="text"/>
                    <button  onClick={handlesend} type ="submit" className="chatscreen__button">SEND</button>
                </form>
          
            </div>
    )
}

export default Chatscreen
 