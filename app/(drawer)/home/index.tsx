import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { Card, Input, ScrollView, Spinner, YStack } from 'tamagui'

import { getSearchResults, getTrending } from '@/services/api'
import useDebounce from '@/utils/useDebounce'
import { MovieCard } from '@/components/MovieCard'
import { Container, Title, Main, Subtitle } from '@/tamagui.config'

const Page = () => {
    const [searchString, setSearchString] = useState("");
    const debouncedString = useDebounce(searchString, 300);

    const trendingQuery = useQuery({
        queryKey: ["trending"],
        queryFn: getTrending,
    })

    const searchQuery = useQuery({
        queryKey: ["search", searchString],
        queryFn: () => getSearchResults(debouncedString),
        enabled: debouncedString.length > 0,
    });

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
                <Container>
                    <YStack>
                        <Title
                            fontSize={50}
                            color="#FFF"
                            enterStyle={{
                                opacity: 0,
                                scale: 1.5,
                                y: -10,
                            }}
                            animation="quick"
                        >Lançamentos</Title>
                        <Input
                            size={"$4"}
                            borderWidth={1}
                            value={searchString}
                            onChangeText={setSearchString}
                            placeholderTextColor={"#FFF"}
                            placeholder='Procure filme, programa de TV, pessoa...'
                        />
                    </YStack>
                </Container>
            </ImageBackground>

            <Subtitle
                p={10}
                enterStyle={{
                    opacity: 0,
                }}
                animation={'lazy'}
            >Lançamentos</Subtitle>

            {(trendingQuery.isLoading || searchQuery.isLoading) && (
                <Spinner
                    py={14}
                    size='large'
                    color={'$blue10'}
                />
            )}

            <ScrollView
                mr={10}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {trendingQuery.data?.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ScrollView>
        </Main>
    )
}

export default Page
