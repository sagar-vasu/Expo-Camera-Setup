import React, { Component } from 'react';
import { List, ListItem, Text, Left, Body, Right, Button, View, } from 'native-base';
import { Dimensions, StyleSheet, Alert } from 'react-native';
const Width = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ListThumbnailExample extends Component {
    render() {
        return (
            <List style={styles.list} onPress={() => {
                Alert.alert('Item got clicked!')
            }}>

                <ListItem thumbnail onPress={this.props.onPress}>
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
                        <Text style={{ fontSize: 14, color: '#d7d9de' }}>{this.props.name}</Text>
                        <Text style={{color: '#d7d9de'}} note numberOfLines={1}>{this.props.info}</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.props.onPress} style={{ backgroundColor: '#c2c6cd', borderRadius: 50, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name="check"
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
        backgroundColor: "#d3ccef",
        marginLeft: -18
    },
    icon: {
        alignSelf: 'center',
        color: "#bbb0e6"
    }
})