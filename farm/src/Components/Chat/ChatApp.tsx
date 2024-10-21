import { CloudUpload, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';

interface ChatProps {
  //chat_id: string;
 // product_id: string;
  customer_id: string;
  farmer_id: string;
  userImg: string;
}

interface Message {
  sender_id: string;
  reciever_id: string;
  message: string;
  img: string
}

const socket = io('http://localhost:3000'); 

const ChatApp: React.FC<ChatProps> = ({customer_id, farmer_id, userImg}) => {

  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    // Listen for new messages
    socket.on('receiveMessage', (data: Message) => {
   
      if (data.sender_id !== customer_id) {
        setChatHistory((prev) => [...prev, data]);
      }
    });
    
    // Clean up socket connection
    return () => {
      socket.off('receiveMessage');
    };
  }, [customer_id]);

  const handleInputMSG = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Emit the message to the server
    socket.emit('sendMessage', {
      farmer_id,
      message,
      sender_id: customer_id,
      img: userImg
    });

    // Update local chat history
    setChatHistory((prev) => [...prev, { sender_id: customer_id,reciever_id: farmer_id, message, img: userImg}]);
    setMessage('');
  };

  return (
    <section>
      <div className="container py-3">
        <div className="flex justify-center">
          <div className="md:w-8/12 lg:w-10/12 xl:w-11/12">
            <div className="card" id="chat2">
              <div className="card-header flex justify-between items-center p-3">
                <h5 className="mb-0">Chat</h5>
              </div>
              <div
                className="card-body overflow-y-auto"
                style={{ height: "400px" }}
              >
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender_id === customer_id
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div className="flex p-2">
                    <img
                  src={msg.img}
                  alt="avatar 3"
                  className="w-10 h-10 rounded-full"
                />
                      <p className="small p-2 ms-3 mb-1 rounded-3 bg-gray-200">
                        {msg.message}
                      </p>
                     
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="mt-2 card-footer text-muted flex justify-start items-center p-2"
                onSubmit={handleInputMSG}  // Use onSubmit here
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                  alt="avatar 3"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  className="form-control ms-2 flex-1 p-2"
                  placeholder="Type message"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMessage(e.target.value)
                  }
                />
                <button className="ms-1 text-muted" type="submit">
                  <Send />
                </button>
                <button className="ms-3 text-muted">
                  <CloudUpload />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatApp;
