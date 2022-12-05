import React, {FunctionComponent,  useState } from 'react'
import styled from 'styled-components/native'
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import { colors, gradients, positions } from '../colors'
import { LinearGradient } from 'expo-linear-gradient'
import IconPathHandler from '../IconPathHandler'

const Gradient = styled(LinearGradient).attrs({
    colors: gradients.togglebutton,
    start:  positions.top,
    end: positions.bottom
})`
    width: 100%
    height: 100%
    borderRadius: 17,
`

const ButtonView = styled.TouchableOpacity`
    width: 54px
    height: 54px
    border-radius: 17px;'
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
            <Gradient>
                <IconContainer>
                    <IconPathHandler icon={props.icon} viewBox={"0 0 24 24"}/>
                </IconContainer>
            </Gradient>
        </ButtonView>
    )
}

export default ToggleIconButton