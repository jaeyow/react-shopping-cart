import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query'
import { getProducts as getTrendingProducts } from '../services/trendingProducts'
import { ITrendingProduct } from '../models'

export const useTrendingProducts = (): UseQueryResult<ITrendingProduct[]> => {
  const queryKey: QueryKey = [
    'products-trending'
  ]
  return useQuery(
    queryKey,
    async () => (await getTrendingProducts()),
    {
      onSuccess: (data: ITrendingProduct[]): void => {
        console.log(`GetTrendingProducts API success: ${data.length} items`)
      },
      onError: (error: Error): void => {
        const customMsg = 'Unspecified Error'
        console.log(`GetTrendingProducts API error: ${error.message} - ${customMsg}`)
      }
    })
}
