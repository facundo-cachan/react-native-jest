import { beforeEach, describe, expect, test } from '@jest/globals';
import { screen } from '@testing-library/react-native';

import { toJSON } from '../utils/customRender';

import { Inputs } from '@components';

import type { InputProps } from '@components';

const props: InputProps = {
  accessibilityLabel: 'asdasdasd',
  style: { backgroundColor: 'red' },

  // secureTextEntry: true,
  value: 'Input Value',
  placeholder: 'PlaceHolder Value'

  // type: 'numeric',
};

describe('Text component', () => {
  beforeEach(() => {
    toJSON(<Inputs.Default {...props} />);
  });
  test('Render component', () => {
    expect(screen).toMatchSnapshot();
  });
  test('Visiblity & text value', () => {
    const input = screen.getByDisplayValue(props.value as string);
    expect(input).toBeOnTheScreen();
    expect(input).toBeVisible();
    expect(input.props.value).toBe(props.value);
  });
  test('Visiblity & placeholder value', () => {
    const input = screen.getByPlaceholderText(props.placeholder as string);
    expect(input).toBeOnTheScreen();
    expect(input).toBeVisible();
    expect(input.props.placeholder).toBe(props.placeholder);
  });
  test('Visiblity & styles values', () => {
    const input = screen.getByDisplayValue(props.value as string);
    expect(input).toBeOnTheScreen();
    expect(input).toBeVisible();
    expect(input.props.style).toContain(props.style);
  });
});
