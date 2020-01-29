
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
import { useFriendStatus } from '../../useFriendStatus';

function DetailScreen() {
    const navigation = useNavigation();
    const isOnline = useFriendStatus(123);
    function onPressOnGoBack() {
        navigation.goBack();
    }
    return (
        <View style={styles.sectionContainer}>
            <Text style={[{ color: isOnline ? '#198962' : '#3E4341' }, styles.sectionTitle]}> Alias </Text>
            <Button style={styles.button}
                title="Go Back"
                onPress={() => onPressOnGoBack()}
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
    },
    button: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
});

export default DetailScreen;

