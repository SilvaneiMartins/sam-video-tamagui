import React from 'react'
import { YStack } from 'tamagui'

import UserInfo from '@/components/UserInfo'
import { Container } from '@/tamagui.config'

const Page = () => {
    return (
        <Container>
            <YStack>
                <UserInfo />
            </YStack>
        </Container>
    )
}

export default Page
