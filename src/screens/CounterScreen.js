import React, { useReducer } from 'react'
import { Text, View, Button } from 'react-native'

const COUNTER_INC = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc_counter':
            return { ...state, counter: state.counter + action.amount };
        case 'dec_counter':
            return { ...state, counter: state.counter - action.amount };

        default:
            return state;
    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button
                title='Increase'
                onPress={() => dispatch({ type: 'inc_counter', amount: COUNTER_INC })}
            />
            <Button
                title='Decrease'
                onPress={() => dispatch({ type: 'dec_counter', amount: COUNTER_INC })}
            />
            <Text>Current Count: {state.counter}</Text>
        </View>
    )
}