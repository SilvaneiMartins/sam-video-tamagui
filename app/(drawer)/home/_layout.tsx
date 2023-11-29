import React from 'react'
import { useTheme } from 'tamagui'
import { Stack } from 'expo-router'
import { DrawerToggleButton } from '@react-navigation/drawer'

const Layout = () => {
    const theme = useTheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.blue7.get(),
                },
                headerTintColor: "#FFFFFF",
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Filmes',
                    headerLeft: () => <DrawerToggleButton tintColor='#FFFFFF' />,
                }}
            />

            <Stack.Screen
                name="movie/[id]"
                options={{
                    headerTitle: '',
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
    )
}

export default Layout
