import { Meta, StoryObj } from '@storybook/react'
import CartList from '.'
import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
    items: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList items={mockItems} total={'R$ 330,00'} />
    </div>
  )
}

export const WithButton: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList items={mockItems} total={'R$ 330,00'} hasButton />
    </div>
  )
}

export const Empty: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList />
    </div>
  )
}
