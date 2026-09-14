import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

// Pages
import Chat from '../../pages/Chat';
import Clients from '../../pages/Clients';
import Dashboard from '../../pages/Dashboard';
import Products from '../../pages/Products';
import Profile from '../../pages/Profile';
import Relatory from '../../pages/Relatory';
import Sell from '../../pages/Sell';

const Tab = createBottomTabNavigator();

export function TabRoutes(){
    return(
        <Tab.Navigator 
        screenOptions={{ 
            headerShown: false, 
            tabBarActiveTintColor: '#55CF24', 
            tabBarStyle: {
                borderTopWidth: 1,
                borderLeftWidth: .1,
                borderRightWidth: .1,
                borderColor: '#2F2F2F',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height: 100,
                paddingTop: 15,
            }
        }}>
            <Tab.Screen 
             name='Dashboard' 
             component={Dashboard} 
             options={{
                tabBarIcon: ({ color })=> 
                <MaterialIcons name='space-dashboard' size={24} color={color} />
             }} 
            />

            <Tab.Screen 
             name='Produtos' 
             component={Products} 
             options={{
                tabBarIcon: ({ color })=> 
                <MaterialIcons name="sell" size={24} color={color} />
             }}
            />

            <Tab.Screen 
             name='Vendas' 
             component={Sell} 
             options={{
                tabBarIcon: ({ color })=> 
                <Entypo name="credit" size={24} color={color} />
             }}
            />

            <Tab.Screen 
             name='Clientes' 
             component={Clients} 
             options={{
                tabBarIcon: ({ color })=> 
                <FontAwesome6 name="user-group" size={24} color={color} />
             }}
            />

            <Tab.Screen 
             name='Relatórios' 
             component={Relatory} 
             options={{
                tabBarIcon: ({ color })=> 
                <Ionicons name="documents" size={24} color={color} />
             }}
            />

            <Tab.Screen 
             name='Chat' 
             component={Chat} 
             options={{
                tabBarIcon: ({ color })=> 
                <Ionicons name="chatbubbles" size={24} color={color} />
             }}
            />

            <Tab.Screen 
             name='Perfil' 
             component={Profile} 
             options={{
                tabBarIcon: ({ color })=> 
                <FontAwesome6 name="user-pen" size={24} color={color} />
             }}
            />
        </Tab.Navigator>
    )
}