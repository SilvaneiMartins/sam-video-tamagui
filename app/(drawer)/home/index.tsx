import React from 'react'
import { Card, Main } from 'tamagui'
import { Link } from 'expo-router'
import { ImageBackground, Text, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { Title } from '@/tamagui.config'
import { getTrending } from '@/services/api'

const Page = () => {

    const trendingQuery = useQuery({
        queryKey: ["trending"],
        queryFn: getTrending,
    })

    return (
        <Main>
            <ImageBackground
                source={{
                    uri: 'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctxm191q5o3axFzQsvNPlbKoSYv.jpg',
                }}
                style={{
                    width: '100%',
                    height: 200,
                }}
            >

            </ImageBackground>
        </Main>
    )
}

export default Page
