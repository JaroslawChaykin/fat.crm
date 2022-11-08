import { Button} from './Button';
import './Button.styles.scss'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      type: 'string',
      description: 'Надпись в кнопке',
      defaultValue: 'Press'
    },
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
    disabled: {
      type: 'boolean',
      description: 'Отключение кнопки',
      defaultValue: 'false',
    }
  }
}

export const Primary = {
  args: {
    text: 'Press',
    rounded: false,
    outline: false,
    primary: false,
    icon: null,
    size: 'small',
    disabled: false
  },
};