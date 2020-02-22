import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>

        <View style={styles.container}>
          <Text>Welcome To Home Screen</Text>
        </View>

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
    justifyContent: "center",
    alignItems: "center"
  },

});
export default Home;
