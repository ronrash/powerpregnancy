import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const Journal = () => {
    const [content, setContent] = useState('');

    const handleSave = () => {
        console.log("Journal Entry Saved: ", content);
        // Later, send this content to the backend to save it
    };

    return (
        <div>
            <h1>My Pregnancy Journal</h1>
            <ReactQuill value={content} onChange={setContent} />
            <button onClick={handleSave}>Save Journal Entry</button>
        </div>
    );
}

export default Journal;
