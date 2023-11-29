import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import { SplashScreen, Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import config from '../tamagui.config'

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

     if (!loaded) return null;

    return (
        <TamaguiProvider config={config}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Slot />
            </GestureHandlerRootView>
        </TamaguiProvider>
    );
}

