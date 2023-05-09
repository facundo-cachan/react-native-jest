import { afterEach, beforeEach, describe, expect, test } from '@jest/globals'
import {
  cleanup,
  fireEvent,
  screen
} from '@testing-library/react-native'

import SignIn from '@screens/signIn'
import { render, toJSON } from '../utils/customRender'

// @ts-ignore
const onChange = jest.fn()

describe('SignIn screen', () => {
  afterEach(() => {
    cleanup()
    // Clean up the mocked fetch after each test
    // @ts-ignore
    global.fetch.mockClear()
  })
  beforeEach(() => {
    // Mock fetch with a resolved Promise that returns sample data
    // @ts-ignore
    jest.clearAllMocks()
    // @ts-ignore
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(),
    })
    render({
      component: SignIn,
      name: 'SignIn'
    })
  })
  describe('Render', () => {
    test('SnapShot Screen', () => {
      toJSON(SignIn)
      expect(screen).toMatchSnapshot()
    })
    test.skip('Render components & values on the screen', () => {
      // const labelEmaill = screen.getAllByTestId(new RegExp('text-input-outlined-label-', 'i'))
      const labelEmailActive = screen.getAllByTestId('text-input-outlined-label-active')
      const labelEmailInactive = screen.getAllByTestId('text-input-outlined-label-inactive')
      expect(labelEmailActive.length).toEqual(2)
      expect(labelEmailInactive.length).toEqual(2)
      expect(labelEmailActive[0].props.children).toEqual('Email')
      expect(labelEmailActive[1].props.children).toEqual('Password')
      expect(labelEmailInactive[0].props.children).toEqual('Email')
      expect(labelEmailInactive[1].props.children).toEqual('Password')
    })
    test.skip('Input testID', () => {
      const email = screen.getByTestId('testIDEmail')
      expect(email.props.children).toEqual('Email')
      fireEvent.changeText(email, 'testID')
      // expect(email.onChangeText).toHaveBeenCalledWith('testID')
      console.log(email)
      // expect(email).toHaveBeenCalledWith('testID')
    })
  })
})
