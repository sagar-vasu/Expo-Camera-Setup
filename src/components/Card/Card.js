import React, { Component } from 'react';
import { CardItem, Text, View, } from 'native-base';
import { Dimensions, StyleSheet } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class CardHeaderFooterExample extends Component {
    render() {
        return (
            <View style={styles.container} >
                <CardItem header style={{ borderRadius: 7 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.txt}>
                            Only 3 steps to start
                        </Text>
                        <Text style={{ marginTop: 10, color: '#6B737C', fontSize: 14 }}>
                            {this.props.noSteps}/3 completed
                        </Text>
                    </View>
                    <View style={{ marginLeft: 30 }}>
                        <ProgressCircle
                            percent={this.props.sliderValue}
                            radius={50}
                            borderWidth={12}
                            color="#6B55C9"
                            shadowColor="#f3f4f5"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18 }}>{this.props.sliderValue + '%'}</Text>
                        </ProgressCircle>
                    </View>
                </CardItem>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH - 20,
        alignSelf: 'center',
        elevation: 1,
        marginTop: 20,
    },
    txt: {
        color: '#223345',
        fontSize: 18,
    }

})