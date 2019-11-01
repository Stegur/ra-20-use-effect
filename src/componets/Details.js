import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './List.css'
import useFetch from '../hooks/useFetch'

function Details({ info }) {

    const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' + info.id + '.json';
    const [data, loading, error] = useFetch(url);
    // const [user, setUser] = useState([])


    return (
        <>
            {loading && <div className="Details list-group">Загрузка ...</div>}
            {error && <div className="Details list-group">{error.message}</div>}
            {data && data.map(item =>
                <div className="Details list-group">
                    <img src={item.avatar} alt={item.name} className="img-thumbnail" />

                    <h3 className="list-group-item">{item.name}</h3>
                    <p className="list-group-item">City: {item.details ? item.details.city : null}</p>
                    <p className="list-group-item">Company: {item.details ? item.details.company : null}</p>
                    <p className="list-group-item">Position: {item.details ? item.details.position : null}</p>

                </div>
            )}
        </>
    )
}

Details.propTypes = {
    info: PropTypes.object.isRequired,
}

export default Details

