/**
 * Simple App for counter using class
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>You clicked {count} times</Text>
            <Button style={styles.button}
                onPress={() => {
                    setCount(count + 1)
                }}
                title="Press Me"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 100,
        paddingHorizontal: 24,
        alignSelf: "center",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    button: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
});

export default App;

