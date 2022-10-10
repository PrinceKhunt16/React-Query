import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

const Infinite = () => {
    const { isLoading, isError, error, data, fetchNextPage, hasNextPage } = useInfiniteQuery(['colors'], fetchColors, {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1
            } else {
                return undefined
            }
        }
    })

    if (isLoading) {
        return <h2>Loading</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>
                {data?.pages.map((group, i) => {
                    return (
                        <>
                            <div className='key={i}'>
                                {group.data.map(color => (
                                    <h2 key={color.id}>
                                        {color.id} {color.label}
                                    </h2>
                                ))}
                            </div>
                        </>
                    )
                })}
            </div>
            <div>
                <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
                    Load more
                </button>
            </div>
        </>
    )
}

export default Infinite