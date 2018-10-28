import React from 'react'
import {
  AsyncStorage,
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import styled from 'styled-components'
import { USER_KEY } from '../../config'
import { NESTED_A_SCREEN } from '../NestedScreenA'
import { Button, Flex } from '../../components'
import { H1, Text } from '../../components/Text'
import { goToAuthScreen } from '../../navigation'
import Spacing from '../../components/Spacing'

const StyledText = styled(Text)`
  margin: 15px 0;
`

const HomeScreen = ({ componentId }) => {
  const handleLogOut = async () => {
    await AsyncStorage.removeItem(USER_KEY)
    goToAuthScreen()
  }

  const handleOpenNestedScreenAPress = () => Navigation.push(componentId, {
    component: {
      name: NESTED_A_SCREEN.name,
    },
  })

  return (
    <Spacing marginHorizontal={20} marginVertical={20}>
      <Flex>
        <H1>Home Screen</H1>
        <StyledText>
          With React Native Navigation it is easy to make native transitions between
          screens.
        </StyledText>
        <Button
          onPress={handleOpenNestedScreenAPress}
          block
        >
          Open Nested Screen A
        </Button>
        <StyledText>
          If you refresh the application or if you minimize it and then open it again you will
          be signed in. Press the sign out button if you want to sign in as a different
          user.
        </StyledText>
        <Button
          onPress={handleLogOut}
        >
          Sign Out
        </Button>
      </Flex>
    </Spacing>
  )
}

export const HOME_SCREEN = {
  name: 'app.Home',
  title: 'Home',
}

HomeScreen.options = () => ({
  topBar: {
    title: {
      text: HOME_SCREEN.title,
    },
  },
})

export default HomeScreen
