import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  counterContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  buttonsContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  counterText:{
    fontSize: 100
    
  }
});

export default styles;
