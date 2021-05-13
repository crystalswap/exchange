import { Token, Price } from '@crystalswap/sdk-core'
import { tickToPrice } from '@crystalswap/v3-sdk'

export function getTickToPrice(baseToken?: Token, quoteToken?: Token, tick?: number): Price | undefined {
  if (!baseToken || !quoteToken || typeof tick !== 'number') {
    return undefined
  }
  return tickToPrice(baseToken, quoteToken, tick)
}
