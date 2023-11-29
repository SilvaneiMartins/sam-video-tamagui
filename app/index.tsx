import React from 'react';
import { View } from 'react-native';
import { Redirect } from 'expo-router';

const Page = () => {
    return (
        <View>
            <Redirect href={'/(drawer)/home/'} />
        </View>
    );
};

export default Page;
