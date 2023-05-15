/* eslint-disable @typescript-eslint/ban-ts-comment */
import { beforeEach, describe, expect, test } from '@jest/globals';
import { fireEvent, screen, waitFor } from '@testing-library/react-native';

import { toJSON } from '../../utils/customRender';

import { ButtonProps, Buttons } from '@components';

// @ts-ignore
const handleClick = jest.fn();
const props: ButtonProps = {
  color: 'yellow',
  title: 'Button Title',
  style: {
    backgroundColor: 'red',
    borderColor: 'green',
    borderWidth: 1
  },
  onPress: handleClick
};

describe('Button component', () => {
  beforeEach(() => {
    toJSON(<Buttons.Default {...props} />);
  });
  test('Render component', () => {
    expect(screen).toMatchSnapshot();
  });
  test('Visiblity & text value by Role', () => {
    const button = screen.getByRole('button');
    expect(button).toBeOnTheScreen();
    expect(button).toBeVisible();
  });
  const title = props.title;
  test(`Should display text ${title}`, () => {
    const button = screen.getByText(title);
    expect(button).toBeOnTheScreen();
    expect(button).toBeVisible();
    expect(button.props.children).toBe(title);
  });
  const color = props.color;
  test(`Should color must be ${String(color)}`, () => {
    const button = screen.getByText(title);
    const btnStyle = button.props.style;
    const styleApplied = btnStyle[btnStyle.length - 1];
    expect(button).toBeOnTheScreen();
    expect(button).toBeVisible();
    expect(styleApplied.color).toBe(color);
  });
  test('Action', () => {
    const btn = screen.getByRole('button');
    fireEvent(btn, 'press');
    waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });
});
