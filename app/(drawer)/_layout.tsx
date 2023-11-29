import Drawer from 'expo-router/drawer';
import { Platform } from 'react-native';
import { colorTokens } from '@tamagui/themes';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                drawerHideStatusBarOnOpen: Platform.OS === "android" ? false : true,
                drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
                drawerActiveTintColor: '#FFFFFF',
                drawerLabelStyle: { marginLeft: -20 },
            }}>
            <Drawer.Screen
                name="user"
                options={{
                    title: "Perfil do Usuário",
                    headerShown: false,
                    drawerIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
                }}
            />

            <Drawer.Screen
                name="home"
                options={{
                    title: "Filmes",
                    headerShown: false,
                    drawerIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="favorites"
                options={{
                    title: "Meus Favoritos",
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
};

export default Layout;
