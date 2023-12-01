import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:8080/chat?username=hazdik', {
                message: message,
            });

            setResponse(res.data.response); // Adjust according to your API response structure
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <input type="text" value={message} onChange={handleInputChange} />
            <button onClick={sendMessage}>Send</button>
            <textarea value={response} readOnly />
        </div>
    );
}

export default ChatComponent;
