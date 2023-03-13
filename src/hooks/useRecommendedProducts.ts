import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query'
import { getProducts as getRecommendedProducts } from '../services/recommendedProducts'
import { IRecommendedProduct } from '../models'

export const useRecommendedProducts = (): UseQueryResult<IRecommendedProduct[]> => {
  const queryKey: QueryKey = [
    'products-recommended'
  ]
  return useQuery(
    queryKey,
    async () => (await getRecommendedProducts()),
    {
      onSuccess: (data: IRecommendedProduct[]): void => {
        console.log(`GetRecommendedProducts API success: ${data.length} items`)
      },
      onError: (error: Error): void => {
        const customMsg = 'Unspecified Error'
        console.log(`GetRecommendedProducts API error: ${error.message} - ${customMsg}`)
      }
    })
}
