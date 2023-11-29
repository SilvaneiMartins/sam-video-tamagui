import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { TamaguiProvider, Theme } from "tamagui";
import { SplashScreen, Slot } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import config from '../tamagui.config'
import { queryClient } from "@/queryClient";

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
                <QueryClientProvider client={queryClient}>
                    <Theme name={"blue"}>
                        <Slot />
                    </Theme>
                </QueryClientProvider>
            </GestureHandlerRootView>
        </TamaguiProvider>
    );
}

