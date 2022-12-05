import { useEffect } from 'react';
import { useLogging } from './src/hooks/useLogging';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

//React Navigation Lib
import RootStack from './src/navigators/RootStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Raleway-Dots": require("./assets/fonts/RalewayDots-Regular.ttf"),
    "Raleway-ExtraLight": require("./assets/fonts/Raleway-ExtraLight.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "ChakraPetch-Light": require("./assets/fonts/ChakraPetch-Light.ttf"),
    "ChakraPetch-Regular": require("./assets/fonts/ChakraPetch-Regular.ttf")
  })
  
  const [logging] = useLogging('Home')

  useEffect(() => {
      logging.info('Loading Home')
  }, [logging])

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
      <RootStack/>
  );
}


