import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: StoryObj = {}

Default.args = {
  children: 'Buy now'
}

export const withIcon: StoryObj = {}

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const asLink: StoryObj = {}

asLink.args = {
  as: 'a',
  children: 'Buy now',
  href: '/link'
}
