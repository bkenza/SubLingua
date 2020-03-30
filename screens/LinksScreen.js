import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen ({ navigation }) {
  navigation.setOptions({ headerShown: false, headerTitle: '' });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>

        <Text style={styles.text}>About this application</Text>
        <Text style={styles.description}>SubLingua is a language learning application that was created for our User Interface Design
        class at Concordia University. It uses the Clarifai object recognition API to identify objects
        on captured images. The returned prediction is then translated to Romanian and the user can see
        both words in a dialog box that appears on the screen.
        </Text>
        <Text style={styles.text}>Clarifai API</Text>
        <Text style={styles.name}>Founded in 2013, Clarifai's powerful image and video recognition solutions are built on the most advanced
        machine learning platform and made easily accessible via API, device SDK and on-premise, empowering businesses all
        over the world to build a new generation of intelligent applications.
        </Text>

        <Text style={styles.text}>Contributors</Text>
        <Text style={styles.name}>Kenza Boulisfane - 40043521</Text>
        <Text style={styles.name}>Zohal Mir - 40033246</Text>
        <Text style={styles.name}>Loujain Al-Nakeeb - 40076090</Text>
        <Text style={styles.name}>David Ronci - 26565549</Text>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <OptionButton
          icon="md-school"
          label="View our GitHub"
          onPress={() => WebBrowser.openBrowserAsync('https://github.com/bkenza/SubLingua')}
          isLastOption
        />
      </ScrollView>
    </View>

  );
}

function OptionButton ({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: '5%',
  },
  textContainer: {
    // paddingTop: '4%'
  },
  text: {
    fontSize: 27,
    paddingHorizontal: "5%",
    color: '#1eb2a6',
    paddingVertical: '2%',
    paddingTop: '5%'
  },
  description: {
    fontSize: 18,
    paddingHorizontal: "5%",
    // paddingTop: "5%"
  },
  name: {
    fontSize: 18,
    paddingHorizontal: "5%",
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#1eb2a6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
