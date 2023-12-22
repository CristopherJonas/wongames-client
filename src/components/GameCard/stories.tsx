import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,90',
    promotionalPrice: 'R$ 200,50'
  },
  argTypes: {
    title: {
      type: 'string'
    },
    developer: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    price: {
      type: 'string'
    },
    promotionalPrice: {
      type: 'string'
    },
    ribbon: { type: 'string' },
    onFav: { action: 'clicked' }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
