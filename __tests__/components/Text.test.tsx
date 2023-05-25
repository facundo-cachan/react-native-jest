import { beforeEach, describe, expect, test } from '@jest/globals';
import { screen } from '@testing-library/react-native';

import { toJSON } from '../utils/customRender';

import { Text } from '@components';

const text = 'Demo Text';

describe('Text component', () => {
  beforeEach(() => {
    toJSON(<Text.Default>{text}</Text.Default>);
  });
  test('Render component', () => {
    expect(screen).toMatchSnapshot();
  });
  test('Visiblity & text value by Role', () => {
    const input = screen.getByText(text);
    expect(input).toBeOnTheScreen();
    expect(input).toBeVisible();
    expect(input.props.children).toBe(text);
  });
});
