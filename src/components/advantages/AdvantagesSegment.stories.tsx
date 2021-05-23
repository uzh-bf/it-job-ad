import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { default as AdvantagesSegment, Props } from './AdvantagesSegment'

export default {
  title: 'Segments/Advantages',
  component: AdvantagesSegment,
} as Meta

const Template: Story<Props> = (args) => <AdvantagesSegment {...args} />

export const Default = Template.bind({})
