import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Alert, ActivityIndicator, TouchableHighlight, Button } from 'react-native';
import { Camera } from 'expo-camera';

// Initialize Clarifai api
const Clarifai = require('clarifai');

const app = new Clarifai.App({
    //Note: ask for API key to test the app
    apiKey: ''
});
process.nextTick = setImmediate;

export default function CameraScreen ({ navigation }, props) {
    navigation.setOptions({ headerShown: true, headerTitle: '' });

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [loading, setLoading] = React.useState(false);
    const [identifiedAs, setIdentifiedAs] = useState('');


    const capturePhoto = async () => {
        if (camera) {
            // Pause the camera's preview
            camera.pausePreview();

            // Set the activity indicator
            setLoading(true);

            // Set options
            const options = {
                base64: true
            };

            let photo = await camera.takePictureAsync(options);

            // Get the identified image
            identifyImage(photo.base64);
        }
    };

    const identifyImage = (imageData) => {
        // Identify the image
        app.models.predict(Clarifai.GENERAL_MODEL, { base64: imageData })
            .then((response) => displayAnswer(response.outputs[0].data.concepts[0].name)
                .catch((err) => alert(err))
            );
    }

    const displayAnswer = (identifiedImage) => {
        setIdentifiedAs(identifiedImage);
        let name = identifiedImage;
        console.log(name);

        setLoading(false);

        // Show an alert with the answer
        Alert.alert(
            name, '', { cancelable: false })

        // Resume the preview
        camera.resumePreview();
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <Camera style={{ flex: 1 }} type={type} ref={ref => (camera = ref)}>
            <ActivityIndicator size="large" style={styles.loadingIndicator} color="#fff" animating={loading} />
            <TouchableHighlight style={styles.captureButton} disabled={loading}>
                {/* <Button color={'white'} onPress={capturePhoto} disabled={loading} title="CAPTURE" accessibilityLabel="Learn more about this button" /> */}
                <Button color={'white'} onPress={capturePhoto} disabled={loading} title="" accessibilityLabel="Learn more about this button" />
            </TouchableHighlight>
        </Camera >
    );
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    loadingIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    captureButton: {
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#1eb2a6",
        justifyContent: "center",
        left: "40%"
    }
});