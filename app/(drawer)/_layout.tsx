import Drawer from 'expo-router/drawer';
import { Platform } from 'react-native';
import { colorTokens } from '@tamagui/themes';
import { Home, Star } from 'lucide-react-native';

const Layout = () => {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                drawerHideStatusBarOnOpen: Platform.OS === 'android' ? false : true,
                drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: { marginLeft: -20 },
            }}>
            <Drawer.Screen
                name="home"
                options={{
                    title: 'Filmes',
                    headerShown: false,
                    drawerIcon: ({ color, size }) => <Home color={color} size={size} />,
                }}
            />
            <Drawer.Screen
                name="favorites"
                options={{
                    title: 'Meus Favoritos',
                    headerShown: false,
                    drawerIcon: ({ color, size }) => <Star color={color} size={size} />,
                }}
            />
        </Drawer>
    );
};

export default Layout;
