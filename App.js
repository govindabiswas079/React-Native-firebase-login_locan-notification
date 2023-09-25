import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Button } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker';
import Notifications from './Notifications';

const App = () => {
  const [date, setDate] = useState(new Date());

  const setNotification = () => {
    // Notifications.schduleNotification(date);
    Notifications.schduleNotification(new Date(Date.now() + 5 * 1000));
  };

  GoogleSignin.configure({
    webClientId: '863687238584-3ucc5v976kkt8rotbb4t177i5nlucdg8.apps.googleusercontent.com',
    offlineAccess: true,
  });

  async function signinWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      
      console.log(userInfo)

      // firestore().collection('UsersS').get()
      //   .then((response) => { console.log('response', response?._docs[1]?._data); })
      //   .catch((error) => { console.log('error', error) });
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  const firebaseConfig = {
    apiKey: "AIzaSyAKHrppFTD1o3ehzFlwiPxubVODdgEOWk8",
    authDomain: "nativefirebase-23309.firebaseapp.com",
    projectId: "nativefirebase-23309",
    // databaseURL: "https://nativefirebase-23309-default-rtdb.firebaseio.com",
    storageBucket: "nativefirebase-23309.appspot.com",
    messagingSenderId: "284545862082",
    appId: "1:284545862082:web:3017f08bc7bcf2715bae5b",
    measurementId: "G-D08YJH0R1N"
  };

  const sendNotification = () => {
    Notifications.localNotification();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topContent}>

        </View>
        <View style={styles.bottomContent}>
          <TouchableOpacity style={styles.googleButton} onPress={signinWithGoogle}>
            <Image
              style={styles.googleIcon}
              source={{
                uri: "https://i.ibb.co/j82DCcR/search.png",
              }}
            />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.container}>
        <DatePicker date={date} onDateChange={setDate} />
        <View style={styles.wrapper} />
        <Button
          title="Set notification after 5 seconds"
          onPress={() => sendNotification()}
        />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#262b2f"
  },
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: "#262b2f",
  },
  topContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 54,
    color: "white",
  },
  googleButton: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000'
  },
  googleIcon: {
    height: 24,
    width: 24
  },
  wrapper: {
    height: 60,
  },
});

export default App;