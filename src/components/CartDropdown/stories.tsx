import { Meta, StoryObj } from '@storybook/react'
import CartDropdown from '.'
import items from '@/components/CartList/mock'
export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 300,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown items={items} total={'R$ 300,00'} />
    </div>
  )
}

export const Empty: StoryObj = {
  render: () => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown />
    </div>
  )
}
