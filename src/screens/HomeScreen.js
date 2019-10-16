import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {

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
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    button: {
        marginVertical: 20,
    }
});

export default HomeScreen;
