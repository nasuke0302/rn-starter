import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default ({ title, source, score }) => {
    return (
        <View>
            <Image source={source} />
            <Text>{title}</Text>
            <Text>Score: {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});