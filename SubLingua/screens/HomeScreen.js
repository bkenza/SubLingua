import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen ({ navigation }) {
  navigation.setOptions({ headerShown: false, headerTitle: '' });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/people.png')}
            style={styles.objectsImage}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to SubLingua!</Text>
          <Text style={styles.description}>Our language learning application takes advantage of the latest object detection technology to help people all around the world learn new languages in a fun and contructive way!</Text>
        </View>
      </ScrollView>
      <TouchableOpacity>

        <View style={styles.cameraButtonContainer}>
          <Button title='GO TO CAMERA' color='#fff' style={styles.cameraButton} onPress={() => navigation.navigate('CameraScreen')}></Button>
        </View>
      </TouchableOpacity>


    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10
  },
  description: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  imageContainer: {
    // width: 100,
    // height: 100,
  },
  objectsImage: {
    width: 400,
    height: 300,
    marginTop: 10,
    marginBottom: 10
  },
  textContainer: {
    marginTop: 30,
    left: 10,
    marginRight: 10
  },
  cameraButtonContainer: {
    position: 'absolute',
    bottom: 80,
    left: 100,
    right: 100,
    alignItems: 'center',
    backgroundColor: '#1eb2a6',
    paddingVertical: 10,
    borderRadius: 30,
  },
  cameraButton: {
    fontSize: 25,
    bottom: "8%",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
