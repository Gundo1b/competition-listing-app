import React, { useState } from 'react'


function CompetitionCard({ competition }) {
    const [entered, setEntered] = useState(false);

    const handleEnter = () => {
        setEntered(true);
        setTimeout(() => setEntered(false), 3000); // Hide message after 3 seconds
    };
    return (
        <div className='card'>
            <h3>{competition.name}</h3>
            <p><strong>Category:</strong> {competition.category}</p>
            <p><strong>Start Date:</strong> {competition.start_date}</p>
            <p><strong>End Date:</strong> {competition.end_date}</p>
            <p>{competition.description}</p>
            {entered ? (
                <p className='enterdmessage'>✅ Successfully entered!</p>
            ) : (
                <button onClick={handleEnter}>Enter Competition</button>
            )}


        </div>
    );
}

export default CompetitionCard
