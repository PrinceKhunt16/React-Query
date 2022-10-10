import React from 'react'
import { useSuperHeroData } from '../Hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'

const SuperHero = () => {
    const { id } = useParams();
    const { isLoading, isError, isFetching, data, error } = useSuperHeroData(id);

    if (isLoading || isFetching) {
        return <h2>Loading</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>{data?.data.name} - {data?.data.alterEgo}</h2>
        </div>
    )
}

export default SuperHero
