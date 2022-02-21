import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import './styles.css';

function MovieItem({ name, date, vote, image, id, rating}) {
    return (
        <>
            <Card className="Movie" bodyStyle={{ padding: 0 }}>
                <Link to={`/movies/${id}`}>
                    {
                        image
                        ?
                        <img loading="lazy" alt={name} src={`https://image.tmdb.org/t/p/w500${image}`} />
                        :
                        <></>
                    }
                    <div className='custom-card'>
                        <h3>{name}</h3>
                        <p>{`Date: ${date} || Votes: ${vote} ${rating ? `Rate: ${rating}` : '' }`}</p>
                    </div>
                </Link>
            </Card>
        </>
    )
}

export default React.memo(MovieItem, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
})