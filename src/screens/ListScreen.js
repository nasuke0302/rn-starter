import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const data = [
        { name: 'Albert', age: '25' },
        { name: 'Nasuke', age: '25' },
        { name: 'Alucard', age: '25' },
        { name: 'Sasuke', age: '25' },
        { name: 'Naruto', age: '25' },
        { name: 'Sakura', age: '25' },
    ];
    const listItem = item => <Text style={styles.listItem}>{item.name} - Lvl. {item.age}</Text>

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={el => el.name}
                data={data}
                renderItem={({ item }) => listItem(item)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10
    }
});

export default ListScreen