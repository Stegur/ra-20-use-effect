import React, { useState, useEffect } from 'react';
import './App.css';
import List from './componets/List';
import Details from './componets/Details';


function App() {

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
      id: '',
      name: ''
  });
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS)
      .then(response => response.json())
      .then(data => setUsers(data))
    return () => {

    };
  }, [])

  const handleClick = (user) => {
    setIsShow(true);
    setCurrentUser(user);
  }

  return (
    <div  className="List-container">
      <List users={users} onClick={handleClick} />
      {isShow && <Details info={currentUser} />}
    </div>
  );
}

export default App;
