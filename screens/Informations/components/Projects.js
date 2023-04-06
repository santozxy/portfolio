import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-elements';

import { projects } from '../../MyProjects/projects';
import {
  primary,
  secundary,
  terciary,
  quartenary,
} from '../../../utils/colors';

const Projects = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={[secundary, primary]} style={styles.container}>
      <Text style={styles.title}> Meus Projetos </Text>
      <Divider style={{ padding: 2, margin: 15 }} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={projects}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.projectButton}
            key={item}
            onPress={() => navigation.navigate('MyProjects', { item })}>
            <Image source={item.image} style={styles.projectImage} />
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    borderRadius: 15,
    borderBottomWidth: 6,
    shadowColor: terciary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.84,
    elevation: 9,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: quartenary,
    textAlign: 'center',
    marginTop: 10,
  },
  projectButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    shadowColor: terciary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10.84,
    elevation: 8,
  },
  projectImage: {
    width: 170,
    height: 270,
    borderRadius: 10,
  },
});

export default Projects;
