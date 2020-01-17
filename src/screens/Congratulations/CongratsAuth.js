import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'native-base';
import { Button } from '../../components';

class Welcome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={require('../../assests/arrow.png')} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.txt}>
                        Congratulations!{"\n"} You have set all your daily activities
                     </Text>
                </View>

                <View style={styles.descriptionContainer}>
                    {/* <Text style={[styles.txt, { fontSize: 14 }]}>
                        Please complete your profile with the patients medical data and photo.
                    </Text> */}
                </View>
                <View style={{marginTop:'25%'}}>
                <Button
                        name="LETS START!"
                        onPress={() => this.props.navigation.navigate('Login')}
                    color="#6B737C"
                    background="#FFFFFF"
                />
                </View>
             
                {/* <View style={{ marginTop: 15 }}>
                    <Button
                        name="LETS START!"
                        onPress={() => alert("Complete Later")}
                        background=""
                        color="white"
                        border='#FFFFFF'
                    />
                </View> */}
                {/* <View style={[styles.descriptionContainer, { marginTop: 5 }]}>
                    <Text style={[styles.txt, { fontSize: 14, textAlign: "left" }]}>
                        Remember, your data is safe and visibile only to your current doctor.
                         Read &nbsp;
                         <Text style={{ borderBottomColor: 'white', borderBottomWidth: 1, color: "white" }}>
                            Privacy policy
                        </Text>
                    </Text>
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#6B55C9",
    },
    img: {
        marginBottom: 20,
        marginVertical: 30
    },
    descriptionContainer: {
        padding: 25,
    },
    txt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
});

export default Welcome;
