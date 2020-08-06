import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './src/LoginScreen'
import ChatScreen from './src/ChatScreen'
import HomeScreen from './src/HomeScreen'
import SignUpScreen from './src/SignUpScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Chat: ChatScreen
},
{
  headerMode: "none"
}
)

export default createAppContainer(AppNavigator)