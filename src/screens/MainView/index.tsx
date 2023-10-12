import {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const MainScreen: FC = () => {
  const counter = useSelector((state: RootState) => state.value);

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonsContainer}></View>
    </View>
  );
};
