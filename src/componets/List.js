import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Details from './Details'
import './List.css'

function List({ users }) {

    const [currentUser, setCurrentUser] = useState({
        id: '',
        name: ''
    });
    const [isShow, setIsShow] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        setCurrentUser({ id: event.target.id, name: event.target.name });
        setIsShow(true);
    }

    return (
        <div className="List-container">
            <div className="List list-group">
                {users.map(user => <a href="#" className="list-group-item list-group-item-action" key={user.id} id={user.id} name={user.name} onClick={handleClick}>{user.name}</a>)}
            </div>
            {isShow && <Details info={currentUser} />}
        </div>
    )
}

List.propTypes = {
    users: PropTypes.array.isRequired
}

export default List

