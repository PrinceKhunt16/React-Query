import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const Dependent = ({ email }) => {
    const { data: user } = useQuery(['user', email], () =>
        fetchUserByEmail(email)
    );

    const channelId = user?.data?.channelId;

    const coursesData = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    });

    return (
        <div>
            {coursesData.data && coursesData.data.data.courses.map((course) => {
                return (
                    <h2>{course}</h2>
                )
            })}
        </div>
    )
}

export default Dependent
