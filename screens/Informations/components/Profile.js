import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import Projects from './Projects';
import {
  primary,
  secundary,
  terciary,
  quartenary,
} from '../../../utils/colors';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[terciary, secundary, primary]}
        style={styles.content}>
        <View>
          <Image
            source={require('../../../assets/profile.JPG')}
            style={styles.profileImage}
          />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.profileName}>Monnuery Junior </Text>
          <Divider style={{ padding: 2 }} />
          <Text style={styles.profileBio}>29/05/2003 </Text>
          <Divider style={{ padding: 2 }} />
          <Text style={styles.profileBio}>Dev. React Native </Text>
          <Divider style={{ padding: 2 }} />
          <Text style={styles.profileBio}>Brasileiro </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={[secundary, primary]}
        style={styles.contentInformations}>
        <Text style={styles.detailTitle}> Resumo Pessoal </Text>
        <Divider style={{ padding: 2, margin: 15 }} />
        <Text style={styles.detailContent}>
          Tenho 19 anos e procuro meu primeiro emprego em Front-End programação.
          Embora minha experiência tenha sido principalmente acadêmica, estou
          muito animado para aplicar meus conhecimentos e habilidades em um real
          ambiente de trabalho.
        </Text>
      </LinearGradient>

      <LinearGradient
        colors={[secundary, primary]}
        style={styles.contentInformations}>
        <Text style={styles.detailTitle}> Formação </Text>
        <Divider style={{ padding: 2, margin: 15 }} />
        <Text style={styles.detailContent}>
          Estou no 5º período da faculdade, cursando Licenciatura em informática
          no IFPI - Instituto Federal do Piauí, com término previsto para
          10/2024.
        </Text>
      </LinearGradient>

      <LinearGradient
        colors={[secundary, primary]}
        style={styles.contentInformations}>
        <Text style={styles.detailTitle}> Minhas Habilidades </Text>
        <Divider style={{ padding: 2, margin: 15 }} />
        <View styles={{ flexDirection: 'row' }}>
          <Text style={styles.detailContent}>
            React Native{' '}
            <Ionicons name="md-logo-react" size={20} color={quartenary} />
          </Text>
          <Text style={styles.detailContent}>
            {' '}
            JavaScript{' '}
            <Ionicons
              name="logo-javascript"
              size={20}
              color={quartenary}
            />{' '}
          </Text>
          <Text style={styles.detailContent}>
            {' '}
            CSS <Ionicons name="logo-css3" size={20} color={quartenary} />{' '}
          </Text>
          <Text style={styles.detailContent}>
            {' '}
            Python <Ionicons
              name="logo-python"
              size={20}
              color={quartenary}
            />{' '}
          </Text>
        </View>
      </LinearGradient>
      <View>
        <Projects />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 15,
    paddingVertical: 10,
    margin: 25,
    borderBottomWidth: 6,
    shadowColor: terciary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.84,
    elevation: 9,
  },
  contentInformations: {
    borderRadius: 15,
    margin: 25,
    borderBottomWidth: 6,
    shadowColor: terciary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.84,
    elevation: 9,
  },
  profileImage: {
    width: 140,
    height: 190,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: primary,
    margin: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: quartenary,
    margin: 12,
  },
  profileBio: {
    fontSize: 15,
    fontWeight: 'bold',
    color: quartenary,
    margin: 12,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: quartenary,
    textAlign: 'center',
    marginTop: 20,
  },
  detailContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: quartenary,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'italic',
  },
});

export default Profile;
