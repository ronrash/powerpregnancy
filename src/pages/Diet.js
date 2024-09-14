import React, { useState } from 'react';

const Diet = () => {
    const [diet, setDiet] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder feedback for the demo
        setFeedback(`Based on your diet: ${diet}, consider adding more greens!`);
    };

    return (
        <div>
            <h1>Log Your Diet</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    placeholder="Enter your current diet"
                />
                <button type="submit">Submit</button>
            </form>
            {feedback && <p>{feedback}</p>}
        </div>
    );
}

export default Diet;
