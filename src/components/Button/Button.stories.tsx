import { Story } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import React from 'react'
import {
  ButtonConfirmed,
  ButtonDropdown,
  ButtonDropdownGrey,
  ButtonDropdownLight,
  ButtonEmpty,
  ButtonError,
  ButtonGray,
  ButtonLight,
  ButtonOutlined,
  ButtonPink,
  ButtonPrimary,
  ButtonRadio,
  ButtonSecondary,
  ButtonUNIGradient,
  ButtonWhite,
} from './index'

const wrapperCss = styled.main`
  font-size: 2em;
  margin: 3em;
  max-width: 300px;
`

export default {
  title: 'Buttons',
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Component: Story) => (
      <div css={wrapperCss}>
        <Component />
      </div>
    ),
  ],
}

const Unicorn = () => (
  <span role="img" aria-label="unicorn">
    🦄
  </span>
)

export const Radio = () => (
  <ButtonRadio>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonRadio>
)
export const DropdownLight = () => (
  <ButtonDropdownLight>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonDropdownLight>
)
export const DropdownGrey = () => (
  <ButtonDropdownGrey>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonDropdownGrey>
)
export const Dropdown = () => (
  <ButtonDropdown>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonDropdown>
)
export const Error = () => (
  <ButtonError>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonError>
)
export const Confirmed = () => (
  <ButtonConfirmed>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonConfirmed>
)
export const White = () => (
  <ButtonWhite>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonWhite>
)
export const Empty = () => (
  <ButtonEmpty>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonEmpty>
)
export const Outlined = () => (
  <ButtonOutlined>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonOutlined>
)
export const UNIGradient = () => (
  <ButtonUNIGradient>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonUNIGradient>
)
export const Pink = () => (
  <ButtonPink>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonPink>
)
export const Secondary = () => (
  <ButtonSecondary>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonSecondary>
)
export const Gray = () => (
  <ButtonGray>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonGray>
)
export const Light = () => (
  <ButtonLight>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonLight>
)
export const Primary = () => (
  <ButtonPrimary>
    <Unicorn />
    &nbsp;ETHEREUMSWAP&nbsp;
    <Unicorn />
  </ButtonPrimary>
)
