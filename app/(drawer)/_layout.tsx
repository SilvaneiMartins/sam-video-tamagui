import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import { colorTokens } from '@tamagui/themes'

const Layout = () => {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                drawerHideStatusBarOnOpen: false,
                drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
                drawerActiveTintColor: "#FFFFFF",
                drawerLabelStyle: {
                    marginLeft: -20,
                },
            }}
        >
            <Drawer.Screen
                name="home"
                options={{
                    title: "Filmes",
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name="ios-home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="favorites"
                options={{
                    title: "Favoritos",
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name="star-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer>
    )
}

export default Layout
