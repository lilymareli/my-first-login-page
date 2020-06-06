import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';

const MyButton = props => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.textStyle}>{props.myTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#546e7a',
        alignSelf: 'center',
        padding: 15,
        margin: 5,
        alignItems: 'center',
        borderRadius: 10,
        width: Dimensions.get("window").width / 1.5
    },

    textStyle: {
        color: 'white'
    }
})

export default MyButton;