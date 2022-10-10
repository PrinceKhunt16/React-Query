import React, { useState } from 'react'
import { useAddSuperHeroData, useSuperHeroesData } from '../Hooks/useSuperHeroesData'
import { Link } from "react-router-dom"

const SuperHeroes = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')
    const { isLoading, isFetching, isError, error, data, refetch } = useSuperHeroesData();

    const { mutate } = useAddSuperHeroData();

    const handleAddHero = () => {
        const hero = {
            name: name,
            alterEgo: alterEgo
        }

        mutate(hero);
        setName('');
        setAlterEgo('');
    }

    if (isLoading || isFetching) {
        return <h2>Loading</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={e => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHero}>Add Hero</button>
            </div>
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
