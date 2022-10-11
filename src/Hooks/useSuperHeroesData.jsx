import { useQuery, useMutation, useQueryClient } from 'react-query'
import { request } from '../Utils/axios'

const fetchSuperHeroes = () => {
    return request({url: '/superheroes'});
}

const addSuperHero = (hero) => {
    return request({url: '/superheroes', method: 'post', data: hero});
}

export const useSuperHeroesData = () => {
    return useQuery('super-heroes', fetchSuperHeroes);
}

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        /*

        onSuccess: (data) => {
            queryClient.setQueryData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data]
                }
            })
        }

        */
        onMutate: async (newHero) => {
            await queryClient.cancelQueries('super-heroes')
            
            const previousHeroData = queryClient.getQueryData('super-heroes')

            queryClient.setQueryData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data,{
                        id: oldQueryData?.data?.length + 1,
                        ...newHero
                    }]
                }
            })

            return {
                previousHeroData
            }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData('super-heroes', context.previousHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heroes')
        }
    });
}