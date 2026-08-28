import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Dashboard' component={Dashboard} />
            <Tab.Screen name='Produtos' component={Products} />
            <Tab.Screen name='Vendas' component={Sell} />
            <Tab.Screen name='Clientes' component={Clients} />
            <Tab.Screen name='Relatórios' component={Relatory} />
            <Tab.Screen name='Chat' component={Chat} />
            <Tab.Screen name='Perfil' component={Profile} />
        </Tab.Navigator>
    )
}