import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './screens/LoginScreen'
import ChatScreen from './screens/ChatScreen'
import HomeScreen from './screens/HomeScreen'
import SignUpScreen from './screens/SignUpScreen'

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