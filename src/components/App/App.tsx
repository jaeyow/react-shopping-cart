import Loader from 'components/Loader'
import { GithubCorner, GithubStarButton } from 'components/Github'
import Filter from 'components/Filter'
import Products from 'components/Products'
import Cart from 'components/Cart'

import { useProducts } from '../../hooks/useProducts'

import * as S from './style'
import logo from '../../CEVO-logo-smaller.webp'
import { availableSizes } from 'components/Filter/Filter'
import { useState } from 'react'

function App() {
  const [sizesFilter, setSizesFilter] = useState<boolean[]>(
    new Array(availableSizes.length).fill(false))
  const getSizesFilter = () => {
    const filters: string[] = []
    availableSizes.forEach((size, index) => {
      if (sizesFilter[index]===true) filters.push(size)
    })
    return filters
  }

  const { isFetching, data } = useProducts(getSizesFilter())
    return (
      <S.Container>
        {isFetching && <Loader />}
        <GithubCorner />
        <S.CevoLogo src={logo} alt="Cevo Logo"></S.CevoLogo>
        <S.TwoColumnGrid>
            <S.Side>
                <Filter sizesFilter={sizesFilter} setSizesFilter={setSizesFilter}/>
                <GithubStarButton />
              </S.Side>
            <S.Main>
                <S.Title>E-Commerce Personalize</S.Title>
                <S.MainHeader>
                    <p>{data?.length} Product(s) found</p>
                  </S.MainHeader>
                <Products products={data?.length ? data : [] } />
              </S.Main>
          </S.TwoColumnGrid>
        <Cart />
      </S.Container>
    )
}

export default App
