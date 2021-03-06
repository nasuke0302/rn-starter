import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> Child 1 </Text>
            <Text style={styles.textStyle}> Child 2 </Text>
            <Text style={styles.textStyle}> Child 3 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 200,
    },
    textStyle : {
        borderWidth: 3,
        borderColor: 'red'
    }
});