import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export default ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <View style={styles.button}>
                <Button
                    title={`Increase ${color}`}
                    onPress={() => onIncrease()}
                />
            </View>
            <View style={styles.button} >
                <Button
                    title={`Decrease ${color}`}
                    onPress={() => onDecrease()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 5
    }
})