import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const isValidPassword = password => password.length > 4 ? true : false;

    return (
        <View>
            <View style={styles.wrapper}>

                <Text>Enter name:</Text>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={newValue => setName(newValue)}
                />
                <Text>Your name is {name}</Text>
            </View>
            <View style={styles.wrapper}>
                <Text>Enter password:</Text>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={newValue => setPassword(newValue)}
                />
                <Text>{isValidPassword(password) ? 'valid password' : 'password must be 5 chars long'} </Text>
            </View>
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
    },
    wrapper: {
        marginVertical: 15
    }
});