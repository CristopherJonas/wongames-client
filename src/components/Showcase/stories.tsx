import { Meta, StoryObj } from '@storybook/react'
import Showcase from '.'

import highlightMock from '@/components/Highlight/mock'
import gamesMock from '@/components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {}

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: StoryObj = {
  render: (args) => <Showcase {...args} />
}

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames: StoryObj = {
  render: (args) => <Showcase {...args} />
}

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
