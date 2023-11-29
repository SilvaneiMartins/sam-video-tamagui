import { useTheme } from 'tamagui';
import { Stack } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';

export const unstable_settings = {
    initialRouteName: 'index',
};

const Layout = () => {
    const theme = useTheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.blue7.get(),
                },
                headerTintColor: '#FFF',
            }}>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Perfil do Usuário',
                    headerLeft: () => <DrawerToggleButton tintColor="#FFF" />,
                }}
            />
        </Stack>
    );
};

export default Layout;
