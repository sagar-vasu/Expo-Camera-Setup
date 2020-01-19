import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Encrypto from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// We import our screens from screens folder

import { Welcome, Signup, CongratulationAuth, Login, Congratulation, HomeScreen, HomeScreen2, HomeScreen3, MainScreen, ReportScreen, DiaryScreen, ConsultScreen } from '../../screens';



const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <FontAwesome name="globe" size={20} color={tintColor} style={{ alignSelf: 'center' }} />
            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Home
            </Text>
          </View>
        )
      }
    },
    Diary: {
      screen: DiaryScreen,
      navigationOptions: {
        tabBarLabel: "Diary",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="book" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Diary
          </Text>
          </View>)
      }
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <LinearGradient
            start={[2, 3]}
            colors={['#E4B8E6', '#6B55C9']}
            style={{
              width: 60, fontSize: 40, height: 60,
              borderRadius: 50, fontWeight: "900", color: 'white',
              backgroundColor: '#6B55C9', textAlign: "center",
              marginBottom: 16,

            }}
          >

            <Text style={{
              fontSize: 45, textAlign: 'center',
              color: 'white',
              shadowColor: 'black',
              shadowOffset: {
                width: 10,
                height: 10
              }
            }}>
              +
            </Text>

          </LinearGradient>

      }
    },
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        tabBarLabel: "Report",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="poll" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Report
            </Text>
          </View>
        )
      }
    },
    Consult: {
      screen: ConsultScreen,
      navigationOptions: {
        tabBarLabel: "Consult",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="chat" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Consult
          </Text>
          </View>
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6B55C9",
      inactiveTintColor: "#959CA7",
      style: {
        borderTopWidth: 0,
        borderTopColor: "white"
      },
      tabStyle: {
        backgroundColor: "transparent",
      }
    }
  }
);

const TabNavigator2 = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen2,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <FontAwesome name="globe" size={20} color={tintColor} style={{ alignSelf: 'center' }} />
            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Home
            </Text>
          </View>
        )
      }
    },

    Diary: {
      screen: DiaryScreen,
      navigationOptions: {
        tabBarLabel: "Diary",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="book" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Diary
          </Text>
          </View>)
      }
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <LinearGradient
            start={[2, 3]}
            colors={['#E4B8E6', '#6B55C9']}
            style={{
              width: 60, fontSize: 40, height: 60,
              borderRadius: 50, fontWeight: "900", color: 'white',
              backgroundColor: '#6B55C9', textAlign: "center",
              marginBottom: 16,

            }}
          >

            <Text style={{
              fontSize: 45, textAlign: 'center',
              color: 'white',
              shadowColor: 'black',
              shadowOffset: {
                width: 10,
                height: 10
              }
            }}>
              +
            </Text>

          </LinearGradient>

      }
    },
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        tabBarLabel: "Report",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="poll" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Report
            </Text>
          </View>
        )
      }
    },
    Consult: {
      screen: ConsultScreen,
      navigationOptions: {
        tabBarLabel: "Consult",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="chat" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Consult
          </Text>
          </View>
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6B55C9",
      inactiveTintColor: "#959CA7",
      tabStyle: {
        backgroundColor: "transparent"
      }
    }
  }
);
const TabNavigator3 = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen3,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <FontAwesome name="globe" size={20} color={tintColor} style={{ alignSelf: 'center' }} />
            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Home
            </Text>
          </View>
        )
      }
    },

    Diary: {
      screen: DiaryScreen,
      navigationOptions: {
        tabBarLabel: "Diary",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="book" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Diary
          </Text>
          </View>)
      }
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <LinearGradient
            start={[2, 3]}
            colors={['#E4B8E6', '#6B55C9']}
            style={{
              width: 60, fontSize: 40, height: 60,
              borderRadius: 50, fontWeight: "900", color: 'white',
              backgroundColor: '#6B55C9', textAlign: "center",
              marginBottom: 16,

            }}
          >

            <Text style={{
              fontSize: 45,
              textAlign: 'center',
              color: 'white',
              shadowColor: 'black',
              shadowOffset: {
                width: 10,
                height: 10
              }
            }}>
              +
            </Text>

          </LinearGradient>

      }
    },
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        tabBarLabel: "Report",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="poll" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Report
            </Text>
          </View>
        )
      }
    },
    Consult: {
      screen: ConsultScreen,
      navigationOptions: {
        tabBarLabel: "Consult",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="chat" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Consult
          </Text>
          </View>
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6B55C9",
      inactiveTintColor: "#959CA7",
      tabStyle: {
        backgroundColor: "transparent"
      }
    }
  }
);



const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
    },
  },
  CongratulationAuth: {
    screen: CongratulationAuth,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home3: {
    screen: TabNavigator3,
    navigationOptions: {
      header: null,
    },
  },
  Home2: {
    screen: TabNavigator2,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: '',
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
  Congrats: {
    screen: Congratulation,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },


}, {
  initialRouteName: 'Welcome'
});

export default createAppContainer(AppNavigator);
