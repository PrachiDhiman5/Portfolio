import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Prachi's virtual assistant. I can tell you about her projects, skills, and how to reach her. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const handleToggle = () => setIsOpen(prev => !prev);
        window.addEventListener('toggle-chatbot', handleToggle);
        return () => window.removeEventListener('toggle-chatbot', handleToggle);
    }, []);

    const callChatApi = async (message) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/chat', { message });
            const { response: botText, shouldRedirect, action } = response.data;

            setMessages(prev => [...prev, { id: Date.now(), text: botText, sender: 'bot', action }]);

            if (shouldRedirect && action === 'contact') {
                setTimeout(() => {
                    if (window.confirm("Would you like to go to the contact page to discuss this opportunity further?")) {
                        navigate('/contact');
                    }
                }, 2000);
            }
        } catch (err) {
            console.error("Chat API error:", err);
            setMessages(prev => [...prev, { id: Date.now(), text: "Sorry, I'm having trouble connecting to my brain right now. Please try again later!", sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOptionClick = (option) => {
        const userMessage = { id: Date.now(), text: option, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        callChatApi(option);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        callChatApi(inputValue);
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <div className="chatbot-toggle" onClick={() => setIsOpen(true)}>
                    💬
                </div>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="header-info">
                            <span className="dot"></span>
                            <h3>Prachi's AI Assistant</h3>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map(msg => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                <div className="text-content">
                                    {msg.text.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                                </div>
                                {msg.action === 'contact' && (
                                    <button className="msg-action-btn" onClick={() => navigate('/contact')}>
                                        Go to Contact Form
                                    </button>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="message bot thinking">
                                <span className="loader-dots"></span>
                                Thinking...
                            </div>
                        )}

                        <div className="chatbot-options">
                            <button className="option-btn" onClick={() => handleOptionClick("What are Prachi's top 3 projects?")}>Projects</button>
                            <button className="option-btn" onClick={() => handleOptionClick("Tell me about her MERN skills.")}>MERN Skills</button>
                            <button className="option-btn" onClick={() => handleOptionClick("How can I hire her?")}>Hiring Info</button>
                        </div>
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Ask me anything about Prachi..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="send-btn" disabled={isLoading}>
                            {isLoading ? '...' : '➤'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
