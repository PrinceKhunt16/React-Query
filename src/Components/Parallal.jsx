import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

const Parallal = () => {
    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)

    return (
        <div>
            <h2>Super Heroes</h2>
            {superHeroes?.data.map((hero) => {
                return (
                    <div key={hero.id}>
                        <h2>{hero.name}</h2>
                    </div>
                )
            })}
            <h2>Friends</h2>
            {friends?.data.map((friend) => {
                return (
                    <div key={friend.id}>
                        <h2>{friend.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Parallal
