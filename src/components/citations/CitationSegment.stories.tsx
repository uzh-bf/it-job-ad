import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { default as CitationSegment, Props } from './CitationSegment'

export default {
  title: 'Segments/Citations',
  component: CitationSegment,
} as Meta

const Template: Story<Props> = (args) => <CitationSegment {...args} />

export const Default = Template.bind({})
