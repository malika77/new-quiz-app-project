import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail'; // Make sure to import QuizDetail

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/quizzes" element={<QuizList />} />
                <Route path="/quizzes/:id" element={<QuizDetail />} />
            </Routes>
        </Router>
    );
};

export default App;


