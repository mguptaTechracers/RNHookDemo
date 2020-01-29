
/**
 * Simple App for counter using class
 * @format
 * @flow
 */

import React from 'react';
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

function DetailScreen() {
    const navigation = useNavigation();

    function onPressGoBackButton() {
        navigation.goBack();
    }

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>This is DetailScreen</Text>

            <Button style={styles.button}
                onPress={() => onPressGoBackButton()}
                title="Go Back"
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

export default DetailScreen;

