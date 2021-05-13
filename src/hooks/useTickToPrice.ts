import { Token, Price } from '@crystalswap/sdk-core'
import { tickToPrice } from '@crystalswap/v3-sdk'

export function getTickToPrice(
  baseToken: Token | undefined,
  quoteToken: Token | undefined,
  tick: number | undefined
): Price | undefined {
  if (!baseToken || !quoteToken || !tick) {
    return undefined
  }
  return tickToPrice(baseToken, quoteToken, tick)
}
