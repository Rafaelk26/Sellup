import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    )
}