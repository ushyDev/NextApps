import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {DELAY_LONG_PRESS_TIME_MS} from '../../config';

type ButtonProps = {
  color?: string;
  title?: string;
  titleColor?: string;
  onPress: () => void;
  disabled?: boolean;
  onPressIn?: () => void;
  onPressOut?: () => void;
};

export const Button = ({
  title = '',
  color = '#000',
  titleColor = color,
  disabled,
  onPress,
  onPressIn,
  onPressOut,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onPressIn}
      onPressOut={onPressOut}
      delayPressIn={DELAY_LONG_PRESS_TIME_MS}
      style={[styles.container, {borderColor: color}]}
      disabled={disabled}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};
