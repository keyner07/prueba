import React, { useEffect, useState} from 'react';
import { Spin } from 'antd';
import {Helmet} from 'react-helmet';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import getTopRatedMovies from 'services/getRatedMovies';

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(1);
    const [loading, setLoading] = useState(false);
    const [moviesNow, setMoviesNow] = useState([]);

    useEffect(() => {
        setLoading(true);

        getTopRatedMovies(currentPage)
            .then(({ movies, total_results }) => {
                setMoviesNow(movies);
                setTotalResults(total_results);
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [currentPage]);

    const nextPage = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
            <Helmet>
                <title>Home || MoviesApp</title>
            </Helmet>
            <Layout>
            {
                    loading
                    ?
                    <div className="container">
                        <Spin size="large" />
                    </div>
                    :
                    <ListOfMovies movies={moviesNow} title="Top Rated" page={currentPage} OnNextPage={nextPage} totalResults={totalResults} />
            }
            </Layout>
        </>
    )
}