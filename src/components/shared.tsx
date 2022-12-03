import { Dimensions } from "react-native"
import styled from 'styled-components/native'
import { colors } from "./colors"
 

export const screenWidth = Dimensions.get('screen').width
export const screenHeight = Dimensions.get('screen').height

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.offwhite}
`

export const FlexContainer = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${colors.offwhite}
`



