import { create } from '@storybook/theming'

// this themes the storybook UI
const crystalswapBaseTheme = {
  brandTitle: 'Crystalswap Design',
  brandUrl: 'https://crystalswap.org',
  brandImage: 'https://crystalswap.org/logo.png',
}
export const light = create({
  base: 'light',
  ...crystalswapBaseTheme,
})

// export const dark = create({
//   base: 'dark',
//   ...crystalswapBaseTheme,
// })
