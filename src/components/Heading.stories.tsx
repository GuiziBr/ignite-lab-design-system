
import { Heading, HeadingProps } from './Heading'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const HeadingWithH1: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (<h1>H1 Heading</h1>)
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}