//  import React, { useEffect, useState } from "react";
// import "./AIChat.css";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const AIChat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [user,setuser]=useState(input)
  
//   // API setup
//   const genAI=new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
   
//   const genminiAPI= async (userss,question)=>{
//     // const userText=userData 
//     const model=await genAI.getGenerativeModel({model: "gemini-1.5-flash"});
//     const result=await model.generateContent(question);
//     const aiResponse=result.response.text();
//     console.log('whole',messages)
//     setMessages([...messages,{sender:userss,ai:aiResponse}])
//     setuser('')
//     // setInput('')
//   }
//    function sendMessage(){
//   const userss=input
//   const question=input
// genminiAPI(userss,question)
//    }
//  console.log('user',messages)   
// // console.log('message',messages)
 
//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.reverse()?.map((msg, index) => (
//           <div key={index} className={``}>
         
//            <div className="message ai">{msg.sender}</div>   
//            <div className={`message user`}>{msg.ai}</div>
           
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           value={input}
//           placeholder="Type your message..."
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage(user)}
//         />
//         <button onClick={()=>sendMessage(user)}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default AIChat;

import React, { useState } from "react";
import "./AIChat.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router";
const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const nevigate= useNavigate()
  // API setup
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const genminiAPI = async (question) => {
    try {
      // Add user message first
      setMessages((prev) => [...prev, { sender: "user", text: question }]);

      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const result = await model.generateContent(question);
      const aiResponse = result.response.text();

      // Add AI response
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);

      setInput("");
    } catch (error) {
      console.error("Error in API:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠ Something went wrong, try again." },
      ]);
    }
  };
  function exit(){
   nevigate('/')
  }

  const sendMessage = () => {
    if (!input.trim()) return;
    genminiAPI(input);
  };
  console.log('this is the data',messages)
    return (
      <div className="parent-box">
        <div className="user-sidebar"></div>
      <div className="chat-container">
      <div className="top-header"><div className="boxes1" onClick={()=>{exit()}}><RxExit className="company-text" /></div><div className="boxes2"><p className="company-text">DEVBros</p></div></div>     
       <div className="chat-box">
        {[...messages].map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
     <div className="user-sidebar"></div>
    </div>
  );


}

export default AIChat;