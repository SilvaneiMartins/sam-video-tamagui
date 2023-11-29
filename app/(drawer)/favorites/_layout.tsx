import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';
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
                    title: 'Meus Favoritos',
                    headerLeft: () => <DrawerToggleButton tintColor="#FFF" />,
                }}
            />

            <Stack.Screen
                name="movie/[id]"
                options={{
                    title: '',
                    headerBackTitle: 'Voltar ',
                }}
            />
            <Stack.Screen
                name="tv/[id]"
                options={{
                    title: '',
                    headerBackTitle: 'Voltar ',
                }}
            />
        </Stack>
    );
};

export default Layout;
