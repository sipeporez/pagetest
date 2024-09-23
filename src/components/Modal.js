import React from 'react';
import { useState } from 'react';

const Modal = ({ isOpen, onClose, onConfirm, text }) => {
  const [comment, setComment] = useState('')
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-bold">Confirm Bookmark</h2>
        <p className="mt-2">{text}</p>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment here"
          className="mt-4 w-full p-2 border rounded"
        />
        <div className="mt-4 flex justify-between">
          <button 
            onClick={onConfirm} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Yes
          </button>
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
