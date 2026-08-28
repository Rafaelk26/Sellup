import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import DetailClients from '../pages/DetailClients';
import DetailProducts from '../pages/DetailProducts';
import DetailRelatory from '../pages/DetailRelatory';
import DetailSell from '../pages/DetailSell';
import NewClients from '../pages/NewClients';
import NewProducts from '../pages/NewProducts';
import NewSell from '../pages/NewSell';
import Signature from '../pages/Signature';

// Routes
import { TabRoutes } from './TabRoutes';

const Stack = createNativeStackNavigator();

export default function UserRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tabs' component={TabRoutes} />
            <Stack.Screen name='DetailClients' component={DetailClients} />
            <Stack.Screen name='DetailProducts' component={DetailProducts} />
            <Stack.Screen name='DetailRelatory' component={DetailRelatory} />
            <Stack.Screen name='DetailSell' component={DetailSell} />
            <Stack.Screen name='NewClients' component={NewClients} />
            <Stack.Screen name='NewProducts' component={NewProducts} />
            <Stack.Screen name='NewSell' component={NewSell} />
            <Stack.Screen name='Signature' component={Signature} />
        </Stack.Navigator>
    )
}