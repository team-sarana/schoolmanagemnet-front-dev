// components/ChatWidget.tsx
'use client';
import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="w-80 h-96 bg-white shadow-lg rounded-xl overflow-hidden animate-fade-in">
                    <div className="bg-orange-600 text-white p-3 flex justify-between items-center">
                        <span>Chat with us</span>
                        <button onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="p-3 flex-1 overflow-y-auto">
                        <div className="text-sm text-gray-800 mb-2">
                            <strong>SITS Information Technology School:</strong><br />
                            How can we help with SITS Information Technology School?
                        </div>
                        {/* You can add message bubbles here */}
                    </div>
                    <div className="border-t p-2">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full border rounded px-2 py-1 text-sm"
                        />
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-xl hover:bg-orange-700 transition-all"
            >
                <FaComments size={24} />
            </button>
        </div>
    );
}
