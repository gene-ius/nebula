import { useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { useLogging } from './src/hooks/useLogging';

//React Navigation Lib
import RootStack from './src/navigators/RootStack';

export default function App() {
  
  const [logging] = useLogging('Home')

  useEffect(() => {
      logging.info('Loading Home')
  }, [logging])
  return (
      <RootStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column'
  },
  header: {
    paddingTop: 35,
    paddingLeft: 12,
    fontSize: 24,
  },
  inputContainer: {
    width: 290,
    height: 58,
    backgroundColor: "white",
    borderRadius: 35,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
  }
  
});
