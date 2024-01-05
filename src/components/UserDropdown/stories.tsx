import { Meta, StoryObj } from '@storybook/react'
import UserDropdown from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
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
      <UserDropdown username={'Cristopher'} />
    </div>
  )
}
