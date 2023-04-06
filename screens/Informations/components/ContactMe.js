import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Divider } from 'react-native-elements';
import {
  primary,
  secundary,
  terciary,
  quartenary,
} from '../../../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ContactMe = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <LinearGradient colors={[secundary, primary]} style={styles.content}>
        <Text style={styles.title}> Entre em Contato </Text>
        <Divider style={{ padding: 2, margin: 15 }} />
        <View>
          <Text style={styles.information}>
            {' '}
            <Ionicons name="mail" size={16} color={quartenary} /> -
            juniorxxxx@gmail.com{' '}
          </Text>
          <Text style={styles.information}>
            {' '}
            <Ionicons name="call" size={16} color={quartenary} /> - (86) 9 9848
            - 0XXX
          </Text>
        </View>

        <Divider style={{ padding: 2, margin: 15 }} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.buttonLink}
            onPress={() => {
              Linking.openURL('https://github.com/santozxy');
            }}>
            <Ionicons
              name="logo-github"
              size={40}
              style={{ marginHorizontal: 50 }}
              color={quartenary}
            />
            <Text style={styles.buttonTextLinks}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLink}
            onPress={() => {
              Linking.openURL('https://reactnative.dev/');
            }}>
            <Ionicons
              name="ios-logo-react"
              size={40}
              style={{ marginHorizontal: 50 }}
              color={quartenary}
            />
            <Text style={styles.buttonTextLinks}>React Native</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLink}
            onPress={() => {
              Linking.openURL(
                'https://www.linkedin.com/in/monnuery-junior-885570250'
              );
            }}>
            <Ionicons
              name="logo-linkedin"
              size={40}
              style={{ marginHorizontal: 50 }}
              color={quartenary}
            />
            <Text style={styles.buttonTextLinks}>Linkedin</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    margin: 25,
    borderBottomWidth: 6,
    shadowColor: primary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.84,
    elevation: 9,
  },
  content: {
    borderRadius: 15,
    margin: 25,
    borderBottomWidth: 6,
    shadowColor: terciary,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5.84,
    elevation: 1,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: quartenary,
  },
  information: {
    margin: 10,
    fontSize: 15,

    color: quartenary,
    textAlign: 'center',
  },
  buttonLink: {
    alignItems: 'center',
    marginBottom: 15,
    borderEndWidth: 1,
    borderColor: quartenary,
  },
  buttonTextLinks: {
    fontSize: 13,

    color: '#fff',
  },
});
export default ContactMe;
