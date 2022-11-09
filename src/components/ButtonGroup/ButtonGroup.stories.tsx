import {ButtonGroup} from './ButtonGroup';
import './ButtonGroup.styles.scss'

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    rounded: {
      type: 'boolean',
      description: 'Округление',
      defaultValue: 'false'
    },
    outline: {
      type: 'boolean',
      description: 'Границы',
      defaultValue: 'false'
    },
    primary: {
      type: 'boolean',
      description: 'Основной цвет сайта',
      defaultValue: 'false'
    },
    size: {
      type: 'string',
      description: 'Размер кнопки',
      defaultValue: 'small',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio'
      }
    },
    children: {
      type: 'string',
      description: 'Кнопки',
      defaultValue: 'Hui',
    },
  }
}

export const Default = {
  args: {
    rounded: false,
    outline: false,
    primary: false,
    size: 'small',
    children: 'Hui'
  },
};