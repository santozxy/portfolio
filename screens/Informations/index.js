import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Profile from './components/Profile';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import { primary, secundary, terciary, quartenary } from '../../utils/colors';

export default function Informations() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[secundary, primary]} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Profile />
          </View>

          <View>
            <ContactMe />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secundary,
  },
});
