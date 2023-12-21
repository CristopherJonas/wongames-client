import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight
        title={'Read Dead is back!'}
        subtitle={'Come see John’s new adventures'}
        backgroundImage={'/img/red-dead-img.jpg'}
        buttonLabel={'Buy now'}
        buttonLink={'/games/rdr2'}
      />
    </div>
  )
}

export const WithFloatImage: StoryObj = {
  render: () => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight
        title={'Read Dead is back!'}
        subtitle={'Come see John’s new adventures'}
        backgroundImage={'/img/red-dead-img.jpg'}
        buttonLabel={'Buy now'}
        buttonLink={'/games/rdr2'}
        floatImage={'/img/red-dead-float.png'}
      />
    </div>
  )
}

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
