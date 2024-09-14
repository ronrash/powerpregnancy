import React, { useState } from 'react';

const PregnancyTips = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleAsk = (e) => {
        e.preventDefault();
        // Placeholder response for now
        setResponse(`AI Response to: "${question}" - Here's a helpful tip!`);
    };

    return (
        <div>
            <h1>Ask a Pregnancy Question</h1>
            <form onSubmit={handleAsk}>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a question..."
                />
                <button type="submit">Ask</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}

export default PregnancyTips;
