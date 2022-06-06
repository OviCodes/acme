import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Click me!',
}
