import React from 'react'

import { Avatar, YStack } from 'tamagui'
import { Container, Main, Title } from '@/tamagui.config'

const UserInfo = () => {
    return (
        <Main>
            <Container>
                <YStack alignItems='center'>
                    <Avatar circular size="$8">
                        <Avatar.Image src="http://github.com/silvaneimartins.png" />
                        <Avatar.Fallback bc="blue" />
                    </Avatar>

                    <Title>
                        Silvanei Martins
                    </Title>
                </YStack>
            </Container>
        </Main>
    )
}

export default UserInfo
