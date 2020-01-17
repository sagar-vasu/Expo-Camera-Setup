import React, { Component } from 'react';
import { List, ListItem, Text, Left, Body, Right, Button, View, } from 'native-base';
import { Dimensions, StyleSheet, Alert } from 'react-native';
const Width = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ListThumbnailExample extends Component {
    render() {
        console.log(this.props)
        return (
            <List style={styles.list} >

                {/* <ListItem thumbnail onPress={this.props.navigation.navigate("Home2")}> */}
                <ListItem thumbnail 
                onPress={() => {
              this.props.props.navigation.navigate(this.props.route)
            }}
             >
                    <Left>
                        <View style={styles.iconContainer} >
                            <Icon
                                name={this.props.iconName}
                                size={25}
                                style={styles.icon}
                            />

                        </View>

                    </Left>
                    <Body>
                        <Text style={{ fontSize: 14 }}>{this.props.name}</Text>
                        <Text note numberOfLines={1}>{this.props.info}</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.props.onPress} style={{ backgroundColor: '#6B55C9', borderRadius: 50, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name="chevron-right"
                                size={20}
                                style={{ alignSelf: 'center', color: "white", }}
                            />
                        </Button>
                    </Right>
                </ListItem>

            </List >
        );
    }
}


const styles = StyleSheet.create({
    list: {
        width: Width - 25,
        marginBottom: 10,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 10
    },
    iconContainer: {
        width: 70,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D3CCEF",
        marginLeft: -18
    },
    icon: {
        alignSelf: 'center',
        color: "#6B55C9"
    }
})