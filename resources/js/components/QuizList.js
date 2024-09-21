import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuizList() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get('/api/quizzes')
            .then(response => setQuizzes(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Quiz List</h2>
            <ul>
                {quizzes.map(quiz => (
                    <li key={quiz.id}>{quiz.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default QuizList;
