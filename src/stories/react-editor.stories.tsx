import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ReactEditor from '../index';
import { ReactEditorProps } from '../../types';

// This default export determines where your story goes in the story list
export default {
  title: 'Example/ReactEditor',
  component: ReactEditor,
  argTypes: {
    backgroundColor: { control: 'color' },
    onChange: { action: 'text changed' }
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  },
} as Meta;

const Template: Story<ReactEditorProps> = (args) => (<ReactEditor {...args} />);

export const Change = Template.bind({});

Change.args = {
  value: '<p><strong>Hello world</strong></p>'
}
