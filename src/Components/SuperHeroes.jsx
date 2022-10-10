import React from 'react'
import { useSuperHeroesData } from '../Hooks/useSuperHeroesData'
import { Link } from "react-router-dom"

const SuperHeroes = () => {
    const { isLoading, isFetching, isError, error, data, refetch } = useSuperHeroesData();

    if (isLoading || isFetching) {
        return <h2>Loading</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {data?.data.map((hero) => {
                return (
                    <div key={hero.id} className="superHeroesLink">
                        <Link to={`/rq-super-heroes/${hero.id}`}>
                            {hero.name}
                        </Link>
                    </div>
                )
            })}
            <button onClick={refetch}>Fetch Heroes</button>
        </div>
    )
}

export default SuperHeroes
