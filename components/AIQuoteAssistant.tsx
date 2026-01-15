import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage, BotStatus } from '../types';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';

const AIQuoteAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState<BotStatus>(BotStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeChat();
      setMessages([
        { 
          role: 'model', 
          text: "Hi there! I'm Luis, your virtual landscaping assistant. Are you looking for a quote on lawn care or a new project?",
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || status === BotStatus.THINKING) return;

    const userMsg = inputText.trim();
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg, timestamp: new Date() }]);
    setStatus(BotStatus.THINKING);

    const botResponse = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: botResponse, timestamp: new Date() }]);
    setStatus(BotStatus.IDLE);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-brand-600 hover:bg-brand-500 animate-bounce-subtle'
        }`}
        aria-label="Toggle Quote Assistant"
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageCircle className="text-white w-7 h-7" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-6 w-[90vw] md:w-96 h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-brand-700 p-4 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center border-2 border-brand-500">
              <Sparkles className="w-5 h-5 text-brand-700" />
            </div>
            <div>
              <h3 className="text-white font-bold">Smart Quote Assistant</h3>
              <p className="text-brand-100 text-xs flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {status === BotStatus.THINKING && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-full border border-gray-200 px-2 py-1 focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-transparent transition-all">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask for an estimate..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-3 py-2 text-sm text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || status === BotStatus.THINKING}
                className={`p-2 rounded-full transition-colors ${
                  !inputText.trim() 
                    ? 'text-gray-300 bg-transparent' 
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
                }`}
              >
                {status === BotStatus.THINKING ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              AI-generated estimates are rough approximations.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIQuoteAssistant;