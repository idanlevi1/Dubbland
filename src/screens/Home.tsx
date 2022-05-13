import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SCREENS } from '../utils/enums';

export default function Home(props) {
    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <Text>Home</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate(SCREENS.GAME_ROOM)}
            >
                <Text>Play</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
