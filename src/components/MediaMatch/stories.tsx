import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Default: StoryObj = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)
export const Mobile: StoryObj = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

Default.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
