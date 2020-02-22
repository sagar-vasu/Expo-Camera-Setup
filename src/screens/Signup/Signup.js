import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Input, CustomButton, Camera } from "../../components";
import { MaterialIcons } from "@expo/vector-icons";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      avatar: null
    };
  }



  // function which will switch to camera mode
  handelPickAvatar = async () => {
    this.setState({
      showCamera: true
    })
  };


  // it will get image uri from camera component
  getResponse = (photo) => {
    this.setState({
      showCamera: false,
      avatar: photo
    })
  }



  // handelsubmit function for form

  handleSignup = () => {
    const { userName, firstName, lastName, avatar } = this.state;
    if (!userName) {
      this.setState({ errMessage: "User Name is Required" });
    } else if (!firstName) {
      this.setState({ errMessage: "First Name is Required" });
    } else if (!lastName) {
      this.setState({ errMessage: "Last Name Required" });
    } else if (!avatar) {
      this.setState({ errMessage: "User Profile is Required" });
    } else {
      this.props.navigation.navigate("Home")
    }
    setTimeout(() => {
      this.setState({ errMessage: null });
    }, 3000);
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        {
          this.state.showCamera ?
            <Camera path={this.props.navigation} sendResponse={this.getResponse} />

            :
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={styles.profile}
                  >{`Update Profile`}</Text>

                  <TouchableOpacity
                    style={styles.avatarPlaceholder}
                    onPress={this.handelPickAvatar}
                  >
                    {this.state.avatar ? (
                      <Image
                        source={{ uri: this.state.avatar }}
                        style={styles.avatar}
                      ></Image>
                    ) : null}
                    <MaterialIcons
                      name="edit"
                      size={15}
                      color="white"
                      style={styles.editIcon}
                    ></MaterialIcons>
                  </TouchableOpacity>

                </View>
                <View style={styles.form}>
                  <Text style={styles.errMessage}>{this.state.errMessage}</Text>

                  <TextInput placeholder="Enter username"
                    value={this.state.userName}
                    onChangeText={(text) => this.setState({ userName: text })}
                    style={styles.userName}
                    placeholderTextColor="black"
                  />

                  <Input
                    placeholder="First Name"
                    onChangeText={text => this.setState({ firstName: text })}
                    value={this.state.firstName}
                  />
                  <Input
                    password={true}
                    placeholder="Last Name"
                    onChangeText={text => this.setState({ lastName: text })}
                    value={this.state.lastName}
                  />
                </View>


                <CustomButton color="#440f7d" name="Done" onPress={this.handleSignup} />

              </View>
            </ScrollView>
        }

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: 24
  },
  container: {
    flex: 1,
  },
  profile: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  editIcon: {
    marginTop: 100,
    marginLeft: 90,
    backgroundColor: "#440f7d",
    borderRadius: 100,
    padding: 5
  },
  form: {
    marginHorizontal: 30
  },
  avatarPlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: "#E1E2E6",
    borderRadius: 100,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 100
  },
  userName: {
    marginVertical: 20,
    height: 45,
    borderBottomWidth: 1,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: '#440f7d'

  },
  errMessage: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 30
  }

});
export default Signup;

