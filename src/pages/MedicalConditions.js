import React, { useState } from 'react';

const MedicalConditions = () => {
    const [condition, setCondition] = useState('');
    const [advice, setAdvice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulating AI advice based on the condition for now
        if (condition.toLowerCase().includes('headache')) {
            setAdvice('For headaches, drink plenty of water, get enough rest, and try some light stretching exercises.');
        } else if (condition.toLowerCase().includes('back pain')) {
            setAdvice('Back pain can be relieved by light stretching, walking, and improving posture. Consider consulting a specialist if the pain persists.');
        } else {
            setAdvice('Based on your condition, we recommend consulting a doctor for further advice.');
        }
    };

    return (
        <div>
            <h1>Medical Condition Advisor</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    placeholder="Enter your medical condition"
                />
                <button type="submit">Get Advice</button>
            </form>

            {advice && (
                <div>
                    <h2>Advice:</h2>
                    <p>{advice}</p>
                </div>
            )}
        </div>
    );
}

export default MedicalConditions;
