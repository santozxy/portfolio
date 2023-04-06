import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { primary, secundary, terciary, quartenary } from '../../utils/colors';

prevButton = () => {
  return (
    <View style={styles.circleButton}>
      <Ionicons name="arrow-back-sharp" color={quartenary} size={45} />
    </View>
  );
};
nextButton = () => {
  return (
    <View style={styles.circleButton}>
      <Ionicons
        type="Ionicons"
        name="arrow-forward"
        color={quartenary}
        size={45}
        style={{ marginLeft: 10 }}
      />
    </View>
  );
};

export default function MyProjects({ navigation, route }) {
  const item = route.params.item;
  const [modalQuit, setModalQuit] = useState(true);
  const [modalInfo, setModalInfo] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalQuit}>
        <View style={styles.modalBackground}>
          <LinearGradient
            colors={[primary, secundary]}
            style={styles.modalContainer}>
            <Text style={styles.modalText}> {item.motivation}</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalQuit(false)}>
                <Text style={styles.modalButtonText}> Ok </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </Modal>
      {modalInfo ? (
        item.repository == null ? null : (
          <Modal animationType="slide" transparent={true} visible={modalInfo}>
            <View style={styles.modalBackground}>
              <LinearGradient
                colors={[primary, secundary]}
                style={styles.modalContainer}>
                <Text style={styles.modalText}>
                  {' '}
                  Deseja ver a estrutura do código ?
                </Text>
                <View style={styles.modalButtonsContainer}>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => {
                      Linking.openURL(item.repository);
                    }}>
                    <Text style={styles.modalButtonText}> Sim </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setModalInfo(false)}>
                    <Text style={styles.modalButtonText}> Não </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </Modal>
        )
      ) : null}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Informations')}
          style={{ flexDirection: 'row' }}>
          <MaterialIcons
            name="assignment-return"
            color={quartenary}
            size={35}
            style={{ margin: 15 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalInfo(true)} style={{}}>
          <MaterialIcons
            name="info"
            size={35}
            color={quartenary}
            style={{ margin: 15 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={item.images}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <Image source={item} style={styles.projectImage} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  content: {
    shadowColor: terciary,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.84,
    elevation: 9,
  },
  projectImage: {
    marginHorizontal: 30,
    width: 350,
    height: Platform.OS === 'ios' ? 700 : 700,
    borderRadius: 15,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0.5, 0.5)',
  },
  modalContainer: {
    backgroundColor: secundary,
    padding: 30,
    borderRadius: 10,
    shadowColor: terciary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 8,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: quartenary,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: terciary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButtonText: {
    color: quartenary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
