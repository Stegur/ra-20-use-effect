import React from 'react'
import PropTypes from 'prop-types'

function List({ users, onClick }) {

    const handleClick = (event) => {
        event.preventDefault();
        onClick({ id: event.target.id, name: event.target.name });

        const list = document.querySelectorAll('.list-group-item');
        list.forEach(item => item.classList.remove('bg-primary', 'text-white'));
        event.target.classList.add('bg-primary', 'text-white');
    }


    return (
        <div className="List list-group">
            {users.map(user => <a href="#" className="list-group-item list-group-item-action" key={user.id} id={user.id} name={user.name} onClick={handleClick}>{user.name}</a>)}
        </div>
    )
}

List.propTypes = {
    users: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default List

