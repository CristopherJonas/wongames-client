import { Meta, StoryObj } from '@storybook/react'
import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {}

Default.args = {
  title: 'Click here',
  children: 'content'
}
