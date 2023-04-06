import { createStackNavigator } from '@react-navigation/stack';
import Informations from './screens/Informations/index'
import MyProjects from './screens/MyProjects/index'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions = {{headerShown:false}}>
      <Stack.Screen name="Informations" component={Informations}/>
      <Stack.Screen name="MyProjects" component={MyProjects} />
    </Stack.Navigator>
  );
}