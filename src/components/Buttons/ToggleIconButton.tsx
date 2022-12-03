import React, {FunctionComponent,  useState } from 'react'
import styled from 'styled-components/native'
import { GestureResponderEvent, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native'
import Svg , { Path } from 'react-native-svg'
import { colors } from '../colors'
import IconPathHandler from '../IconPathHandler'

const ButtonView = styled.TouchableOpacity`
    width: 54px
    height: 54px
    background-color: ${colors.white};
    border-radius: 27px;'
    boxShadow: 0px 2px 1px ${colors.shadow}
`

const IconContainer = styled.View`
    height: 100%
    width: 100%
    padding: 13px 13px 13px 13px  
    justify-content: center
    align-items: center
`

//types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>
    onPress: ((event : GestureResponderEvent) => void) | undefined
    icon: string
}

const ToggleIconButton: FunctionComponent<ButtonProps> =  (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <IconContainer>
                <IconPathHandler icon={props.icon} viewBox={"0 0 24 24"}/>
            </IconContainer>
        </ButtonView>
    )
}

export default ToggleIconButton