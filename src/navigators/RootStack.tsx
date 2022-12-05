import React , { FunctionComponent } from 'react'

//React Navigation Libraries
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//Custom Components
import Welcome from '../screens/Welcome';
import Home from '../screens/Home'
import { colors } from '../components/colors';
import Greeting from '../components/Header/Greeting'
import Profile from '../components/Header/Profile'


type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>()

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTransparent: true,
            headerStyle: {
                borderBottomWidth: 0,
                shadowColor: 'transparent',
                shadowOpacity: 0,
                elevation: 0,
                height: 90,
                backgroundColor: colors.shadow
            },
            headerRightContainerStyle: {paddingRight: 10, paddingTop: 25},
            headerRight: () => (
                <Profile 
                    onPress={() => {}}
                />
            ) 
        }}>
            <Stack.Screen 
                name='Welcome'
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                    headerTitle: (props) => (
                        <Greeting
                            mainText="Gene's Mind"
                            subText='Today...'
                            {...props}
                        />
                    ),
                    headerTitleAlign: 'left',
                    }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack