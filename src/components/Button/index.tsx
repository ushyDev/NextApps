import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type ButtonProps = {
  color?: string;
  title?: string;
  titleColor?: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button = ({
  title = '',
  color = '#000',
  titleColor = color,
  disabled,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {borderColor: color}]}
      disabled={disabled}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};
