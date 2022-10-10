import React from 'react'
import axios from 'axios'
import { useQueries } from 'react-query'

const fetchSuperHero = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

const DynamicParallal = ({ ids }) => {
    const queryResults = useQueries(
        ids.map((id) => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            }
        })
    )

    return (
        <div>
            {queryResults.map((hero) => {
                return (
                    <>
                        {hero.data && 
                            <div><h2>{hero.data.data.name} - {hero.data.data.alterEgo}</h2></div>
                        }
                    </>
                )
            })}
        </div>
    )
}

export default DynamicParallal
