import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function GuideScreen ({ navigation }) {
    navigation.setOptions({ headerShown: true, headerTitle: 'Guide' });
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text>Hello</Text>
            </ScrollView>
        </View>
    );
}

GuideScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: "2%"
    },
});
