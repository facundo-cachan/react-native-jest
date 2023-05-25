/* eslint-disable @typescript-eslint/ban-ts-comment */
import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import { cleanup, screen, waitFor } from '@testing-library/react-native';

import Demo from '@screens/demo';
import { App, render, toJSON } from '../utils/customRender';

const props = {
  component: Demo,
  name: 'Demo'
};
describe('Demo screen', () => {
  afterEach(() => {
    cleanup();

    // Clean up the mocked fetch after each test
    // @ts-ignore
    global.fetch.mockClear();
  });
  beforeEach(() => {
    // Mock fetch with a resolved Promise that returns sample data
    // @ts-ignore
    jest.clearAllMocks();

    // @ts-ignore
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve()
    });
    render(props);
  });
  describe('Render', () => {
    test('SnapShot Screen', () => {
      toJSON(<App {...props} />);
      expect(screen).toMatchSnapshot();
    });
    test('Render components & values on the screen', async () => {
      const goTo = screen.getByText(/Go to/);
      const byText = screen.getByText(/Screen/);
      const byPlaceholderText = screen.getByPlaceholderText(/Name/);
      waitFor(() => {
        expect(goTo).toBeTruthy();
        expect(byText).toBeTruthy();
        expect(byPlaceholderText).toBeTruthy();
      });
    });
  });
});
