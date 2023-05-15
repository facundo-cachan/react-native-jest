import { Button } from 'react-native';

import type { ButtonProps } from 'react-native/Libraries/Components/Button';

const Default = ({ accessibilityLabel, color, title, onPress }: ButtonProps): React.JSX.Element => (
  <Button
    accessibilityLabel={accessibilityLabel ?? title}
    color={color}
    title={title}
    onPress={onPress}
  />
);

export default Default;
