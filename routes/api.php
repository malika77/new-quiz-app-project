<?php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/quizzes', [QuizController::class, 'index']);
    Route::post('/quizzes', [QuizController::class, 'store']);
    Route::get('/quizzes/{id}', [QuizController::class, 'show']);

    Route::post('/quizzes/{quiz}/questions', [QuestionController::class, 'store']);
    Route::get('/quizzes/{quiz}/questions', [QuestionController::class, 'index']);

    Route::post('/quizzes/{quiz}/results', [ResultController::class, 'store']);
    Route::get('/results', [ResultController::class, 'index']);
});
