import React, { useState } from 'react'
import { View } from 'react-native'

import ColorCounter from '../components/ColorCounter'

const COLOR_INC = 15;

export default () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change, setter) => {
        if (color + change > 255 || color + change < 0) return;
        setter(color + change);
    }

    return (
        <View>
            <ColorCounter
                color='Red'
                onIncrease={() => setColor(red, COLOR_INC, setRed)}
                onDecrease={() => setColor(red, -1 * COLOR_INC, setRed)}
            />
            <ColorCounter
                color='Green'
                onIncrease={() => setColor(green, COLOR_INC, setGreen)}
                onDecrease={() => setColor(green, -1 * COLOR_INC, setGreen)}
            />

            <ColorCounter
                color='Blue'
                onIncrease={() => setColor(blue, COLOR_INC, setBlue)}
                onDecrease={() => setColor(blue, -1 * COLOR_INC, setBlue)}
            />

            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}>
            </View>
        </View>
    )
}
