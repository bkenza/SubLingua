import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Alert, ActivityIndicator, TouchableHighlight, Button } from 'react-native';
import { Camera } from 'expo-camera';


// process.nextTick = setImmediate;

function CameraScreen ({ navigation }, props) {
    navigation.setOptions({ headerShown: true, headerTitle: '' });
    process.nextTick = setImmediate;

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [predictions, setPredictions] = React.useState([]);
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

        // Initialise Clarifai api
        const Clarifai = require('clarifai');

        const app = new Clarifai.App({
            apiKey: 'b21e07e92b1343c185c9bbd58cad7019'
        });

        // Identify the image
        app.models.predict(Clarifai.GENERAL_MODEL, { base64: imageData })
            .then((response) => displayAnswer(response.outputs[0].data.concepts[0].name)
                .catch((err) => alert(err))
            );
    }

    const displayAnswer = (identifiedImage) => {
        console.log(identifiedImage)
        setIdentifiedAs(identifiedImage);
        setLoading(false);

        // Show an alert with the answer on
        Alert.alert(
            identifedAs,
            '',
            { cancelable: false })

        // Resume the preview
        camera.resumePreview();
    }

    // const resize = async photo => {
    //     let manipulatedImage = await ImageManipulator.manipulate(
    //         photo,
    //         [{ resize: { height: 300, width: 300 } }],
    //         { base64: true }
    //     );
    //     return manipulatedImage.base64;
    // };

    // const predict = async image => {
    //     let predictions = await clarifai.models.predict(
    //         Clarifai.GENERAL_MODEL,
    //         image
    //     );
    //     return predictions;
    // };

    // objectDetection = async () => {
    //     let photo = await capturePhoto();
    //     let resized = await resize(photo);
    //     let predictions = await predict(resized);
    //     setPredictions(predictions.outputs[0].data.concepts);
    // };

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
                <Button color={'white'} onPress={capturePhoto} disabled={loading} title="Capture" accessibilityLabel="Learn more about this button" />
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
        width: 160,
        fontSize: 25,
        borderRadius: 10,
        backgroundColor: "#1eb2a6",
        justifyContent: "center",
        left: 50
    }
});

export default CameraScreen;