import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query'
import { getProducts } from '../services/products'
import { IProduct } from '../models'

export const useProducts = (filters?: string[]): UseQueryResult<IProduct[]> => {
  const queryKey: QueryKey = [
    'products-normal',
    filters
  ]
  return useQuery(
    queryKey,
    async () => (await getProducts(filters)),
    {
      onSuccess: (data: IProduct[]): void => {
        console.log(`GetProducts API success: ${data.length} items`)
      },
      onError: (error: Error): void => {
        const customMsg = 'Unspecified Error'
        console.log(`GetProducts API error: ${error.message} - ${customMsg}`)
      }
    })
}
