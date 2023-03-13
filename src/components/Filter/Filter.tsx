import { FC } from 'react'

import * as S from './style'

export const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']

type Props = {
  sizesFilter: boolean[];
  setSizesFilter: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const Filter: FC<Props> = ({sizesFilter, setSizesFilter}) => {
    const handleOnChange = (position: number) => {
        const updatedCheckedState = sizesFilter.map((item, index) =>
        position === index ? !item : item
        )
    
        // console.log(updatedCheckedState)
        setSizesFilter(updatedCheckedState)
    
      }

    return (
      <S.Container>
          <S.Title>Sizes:</S.Title>
          {
            availableSizes?.map((item, index) => {
                return (
                    <S.Checkbox label={item} handleOnChange={() => {handleOnChange(index)}} key={item} />
                )
                
            })
          }
        </S.Container>
    )
}

export default Filter
