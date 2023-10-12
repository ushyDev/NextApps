import {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, increment} from '../../store';
import {Button} from '../../components/Button';

export const MainScreen: FC = () => {
  const counter = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          disabled={counter === 100}
          onPress={handleIncrement}
          title="+"
        />
      </View>
    </View>
  );
};
