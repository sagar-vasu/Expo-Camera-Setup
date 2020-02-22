import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SignupScreen, HomeScreen } from "../../screens";

const AppContainer = createStackNavigator({
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Home: {
    screen: HomeScreen,
  }
});

export default createAppContainer(AppContainer);
