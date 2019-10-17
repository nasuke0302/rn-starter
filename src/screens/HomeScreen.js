import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Hello There</Text>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('Components')}
                    title='Go to Components Demo'
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('List')}
                    title='Go to List Demo'
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('Image')}
                    title='Go to Image Demo'
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('Counter')}
                    title='Go to Counter Demo'
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('Color')}
                    title='Go to Color Demo'
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('Square')}
                    title='Go to Square Demo'
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('Text')}
                    title='Go to Text Demo'
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('Box')}
                    title='Go to Box Demo'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    button: {
        marginVertical: 10,
    }
});