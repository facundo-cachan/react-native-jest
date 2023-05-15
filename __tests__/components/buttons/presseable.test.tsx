/* eslint-disable @typescript-eslint/ban-ts-comment */
import { beforeEach, describe, expect, test } from '@jest/globals';
import { fireEvent, screen, waitFor } from '@testing-library/react-native';

import { toJSON } from '../../utils/customRender';

import { Buttons, PressableProps } from '@components';

// @ts-ignore
const handleClick = jest.fn();
const props: PressableProps = {
  accessibilityLabel: 'Pressable Button',
  title: 'Pressable Button Title',
  style: {
    container: {
      backgroundColor: 'green',
      borderColor: 'yellow'
    },
    text: { color: '#c55' }
  },
  onPress: handleClick
};

describe('Button component', () => {
  beforeEach(() => {
    toJSON(<Buttons.Pressable {...props} />);
  });
  test('Render component', () => {
    expect(screen).toMatchSnapshot();
  });
  const title = props.title;
  test(`Should display text ${title}`, () => {
    const button = screen.getByText(title);
    expect(button).toBeOnTheScreen();
    expect(button).toBeVisible();
    expect(button.props.children).toBe(title);
  });
  test.skip('Verifyng styles', () => {
    const { container, text }: PressableProps['style'] = props.style;
    const button = screen.getByRole('button');
    const buttonTitle = screen.getByText(title);
    const textStyle = buttonTitle.props.style;
    const textStyleApplied = textStyle[textStyle.length - 1];

    const buttonStyle = button.props.style;
    const buttonStyleApplied = buttonStyle[buttonStyle.length - 1];

    expect(button).toBeOnTheScreen();
    expect(button).toBeVisible();

    expect(textStyleApplied).toBe(text);
    expect(buttonStyleApplied).toBe(container);
  });
  test.skip('Action', () => {
    const btn = screen.getByRole('button');
    fireEvent(btn, 'press');
    waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });
});
