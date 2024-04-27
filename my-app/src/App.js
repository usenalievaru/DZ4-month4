import React, { useState, useEffect } from 'react';
import MainPage from "./MainPage/MainPage";
import ErrorPage from "./ErrorPage/ErrorPage";


function App() {
    const [user, setUser] = useState({ name: '', lastname: '' });

    if (user.name === '' || user.lastname === '') {
        const name = prompt('Введите ваше имя:');
        const lastname = prompt('Введите вашу фамилию:');
        setUser({ name, lastname });
    }

    return (
        <>
            {user.name === 'John' && user.lastname === 'Johns' ? (
                <MainPage user={user} />
            ) : (
                <ErrorPage user={user} />
            )}
        </>
    );
}

export default App;
