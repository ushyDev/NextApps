import {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, decrement, increment, setIntervalID} from '../../store';
import {Button} from '../../components/Button';
import {MIN_VALUE, MAX_VALUE, REPEAT_TIME_MS} from '../../config';

export const MainScreen: FC = () => {
  const counter = useSelector((state: RootState) => state.value);
  const intervalID = useSelector((state: RootState) => state.intervalID);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handlePressIn = (fnc: () => void) => {
    const id = setInterval(fnc, REPEAT_TIME_MS);
    dispatch(setIntervalID(id));
  };

  const handlePressOut = () => {
    if (intervalID !== null) {
      clearInterval(intervalID);
      dispatch(setIntervalID(null));
    }
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
          onPressIn={() => handlePressIn(handleDecrement)}
          onPressOut={handlePressOut}
          title="-"
        />
        <Button
          disabled={counter === MAX_VALUE}
          onPress={handleIncrement}
          title="+"
          onPressIn={() => handlePressIn(handleIncrement)}
          onPressOut={handlePressOut}
        />
      </View>
    </View>
  );
};
