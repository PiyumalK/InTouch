import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './src/LoginScreen'
import ChatScreen from './src/ChatScreen'
import HomeScreen from './src/HomeScreen'
import SignUpScreen from './src/SignUpScreen'
import DashboardScreen from './src/DashboardScreen'
import UpdateScreen from './src/UpdateScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Chat: ChatScreen,
  Dashboard: DashboardScreen,
  Update: UpdateScreen,
},
{
  headerMode: "none"
}
)

export default createAppContainer(AppNavigator)