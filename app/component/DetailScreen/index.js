
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

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    onPressLoginButton(){
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>This is DetailScreen</Text>
            
                <Button style={styles.button}
                    onPress={() => this.onPressLoginButton()}
                    title="Go Back"
                />
            </View>
        );
    }
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

