import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default () => {
    const [text, setText] = useState('');
    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={text}
                onChangeText={newValue => setText(newValue)}
            />
            <Text>Your name is {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        margin: 15,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderColor: '#eee',
        borderRadius: 5,
    }
});