import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function FirstScreen ({ navigation }) {
    navigation.setOptions({ headerShown: false, headerTitle: '' });
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={require('../assets/images/books.png')}
                        style={styles.welcomeImage}
                    />
                </View>

                <View style={styles.getStartedContainer}>
                    <Text style={styles.getStartedText}>SubLingua</Text>
                </View>
            </ScrollView>

            <TouchableOpacity>
                <View style={styles.homepageButtonContainer}>
                    <Button title='HOMEPAGE' color='#1eb2a6' style={styles.buttonStyling} onPress={() => navigation.navigate('Home')}></Button>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.cameraButtonContainer}>
                    <Button title='CAMERA' color='#1eb2a6' style={styles.buttonStyling} onPress={() => navigation.navigate('CameraScreen')}></Button>
                </View>
            </TouchableOpacity>

        </View>
    );
}

FirstScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1eb2a6',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 200,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 160,
        marginTop: 25,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    getStartedText: {
        fontSize: 25,
        color: '#fff',
        lineHeight: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    homepageButtonContainer: {
        position: 'absolute',
        bottom: 180,
        left: 100,
        right: 100,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 30
    },
    cameraButtonContainer: {
        position: 'absolute',
        bottom: 110,
        left: 100,
        right: 100,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 30
    },
    buttonStyling: {
        fontSize: 25,
        bottom: "8%",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
    },
});
