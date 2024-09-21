import React, { useState, useEffect } from 'react';

function QuizDetail({ match }) {
    const [timeLeft, setTimeLeft] = useState(60 * 10); // e.g., 10 minutes

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            <h2>Quiz</h2>
            <p>Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
            {/* Quiz questions go here */}
        </div>
    );
}

export default QuizDetail;

