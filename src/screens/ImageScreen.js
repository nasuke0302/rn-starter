import React from 'react'
import { View, StyleSheet } from 'react-native'

import ImageDetail from '../components/ImageDetail';

export default props => {
    return (
        <View>
            <ImageDetail title='Forest' source={require(`../../assets/forest.jpg`)} score='9.8' />
            <ImageDetail title='Beach' source={require(`../../assets/beach.jpg`)} score='8.5' />
            <ImageDetail title='Mountain' source={require(`../../assets/mountain.jpg`)} score='9.0' />
        </View>
    )
}

const styles = StyleSheet.create({});