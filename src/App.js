import React, { useState, useEffect } from 'react';
import './App.css';
import List from './componets/List';


function App() {

  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setUsers(data))
    return () => {

    };
  }, [url])

  return (
    <List users={users} />
  );
}

export default App;
