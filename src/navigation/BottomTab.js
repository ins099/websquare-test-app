import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';
import QrCode from '../Screen/QrCode'

const Tab = createBottomTabNavigator();

const BottomTab= () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="AuthStack" component={AuthStack} />
      <Tab.Screen name="Scan" component={QrCode} />
    </Tab.Navigator>
  );
}

export default BottomTab;