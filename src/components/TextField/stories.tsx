import { Meta, StoryObj } from '@storybook/react'
import TextField from '.'
import { Email } from 'styled-icons/material-outlined'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  argTypes: {
    oninput: {
      action: 'changed'
    },
    icon: { type: 'string' }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}

export const withError: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}
withError.args = {
  error: 'Ops...something is wrong'
}
