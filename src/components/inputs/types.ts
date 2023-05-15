import type {
  KeyboardTypeOptions,
  TextInputProps
} from 'react-native/Libraries/Components/TextInput/TextInput';

export interface Props extends TextInputProps {
  type?: KeyboardTypeOptions;
}
