import React from 'react'
import { Field } from '../../state/mint/v3/actions'
import { AutoColumn } from 'components/Column'
import Card from 'components/Card'
import styled from 'styled-components'
import { CurrencyAmount, Price } from '@crystalswap/sdk-core'
import { Position } from '@crystalswap/v3-sdk'
import { PositionPreview } from 'components/PositionPreview'

const Wrapper = styled.div`
  padding-top: 12px;
`

export const Badge = styled(Card)<{ inRange?: boolean }>`
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  padding: 4px 6px;
  background-color: ${({ inRange, theme }) => (inRange ? theme.green1 : theme.yellow2)};
`

export function Review({
  position,
  outOfRange,
}: {
  position?: Position
  existingPosition?: Position
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  priceLower?: Price
  priceUpper?: Price
  outOfRange: boolean
}) {
  return (
    <Wrapper>
      <AutoColumn gap="lg">
        {position ? <PositionPreview position={position} inRange={!outOfRange} title={'Selected Range'} /> : null}
      </AutoColumn>
    </Wrapper>
  )
}

export default Review
