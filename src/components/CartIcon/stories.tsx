import { Meta, StoryObj } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {}

export const withItems: StoryObj = {}
withItems.args = {
  quantity: 3
}
