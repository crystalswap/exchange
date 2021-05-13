# Crystal Swap Exchange

[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for Crystal Swap -- a decentralized exchange for Ethereum tokens.

- Website: [crystalswap.org](https://crystalswap.org/)
- Interface: [app.crystalswap.org](https://app.crystalswap.org)
- Docs: [docs.crystalswap.org](https://docs.crystalswap.org)
- Twitter: [@CrystalizeLabs](https://twitter.crystalswap.org)
- Reddit: [/r/CrystalSwap](https://reddit.crystalswap.org)
- Discord: [CrystalSwap](https://discord.crystalswap.org)

## Accessing the Crystal Swap Exchange

To access the Crystal Swap Exchange, visit [app.crystalswap.org](https://app.crystalswap.org).

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

Note that the exchange only works on networks where both
[Crystal Swap V2](https://github.com/crystalswap/exchange) and
[multicall](https://github.com/makerdao/multicall) are deployed.
It will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.**
CI checks will run against all PRs.