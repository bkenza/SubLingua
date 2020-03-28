import * as React from 'react';
import { View, Text } from 'react-native';

function Camera ({ navigation }) {
    navigation.setOptions({ headerShown: true, headerTitle: '' });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Camera Screen</Text>
        </View>
    );
}

export default Camera;