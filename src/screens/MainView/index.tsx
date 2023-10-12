import {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, decrement, increment} from '../../store';
import {Button} from '../../components/Button';
import {MIN_VALUE, MAX_VALUE} from '../../config';

export const MainScreen: FC = () => {
  const counter = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          disabled={counter === MIN_VALUE}
          onPress={handleDecrement}
          title="-"
        />
        <Button
          disabled={counter === MAX_VALUE}
          onPress={handleIncrement}
          title="+"
        />
      </View>
    </View>
  );
};
