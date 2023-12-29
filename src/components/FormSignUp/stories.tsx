import { Meta, StoryObj } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'FormSignUp',
  component: FormSignUp
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignUp />
    </div>
  )
}
