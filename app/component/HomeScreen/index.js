
/**
 * Simple App for counter using class
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(1);

    const navigation = useNavigation();

    function onPressLoginButton() {
        navigation.replace('login');
    }

    useEffect(() => {
        interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        // Specify how to clean up after this effect:
        // this will clearInterval when component unmont like in ComponentWillUnmount

        return function cleanup() {
            console.log("================= cleanup ===========")
            console.log("=================  clearInterval ===========")
            clearInterval(interval);
            setTimer(1);
        };
    }, []);
    // [] when we wants to execute ComponentWillUnmount/cleanup only once

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>You clicked {count} times</Text>
            <Button style={styles.button}
                onPress={() => {
                    setCount(count + 1)
                }}
                title="Press Me"
            />
            <Button style={styles.button}
                onPress={() => onPressLoginButton()}
                title="Go To Login"
            />
            <Text style={styles.sectionTitle}>Time {timer} seconds</Text>
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

export default HomeScreen;

