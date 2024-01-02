import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider from '.'
import { GameCardProps } from '../GameCard'
import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  rgs: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={items} {...args} />
    </div>
  )
}
