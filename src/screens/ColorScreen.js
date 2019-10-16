import React, { useState } from 'react'
import { View, Button, FlatList, StyleSheet } from 'react-native'

export default () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title='Add a Color'
                onPress={() => setColors([...colors, randomRgb()])}
            />
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={styles.listItem(item)}></View>
                }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    listItem(item) {
        return {
            height: 100,
            width: 100,
            backgroundColor: item
        }
    }
});