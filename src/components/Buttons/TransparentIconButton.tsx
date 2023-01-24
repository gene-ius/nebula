import React, { FunctionComponent } from 'react'
import { GestureHandlerGestureEvent } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import IconPathHandler from '../IconPathHandler'
import { colors } from '../colors'
import { ViewStyle } from 'react-native'

const ButtonView = styled.TouchableOpacity`
    width: 30px
    height: 30px
    border-radius: 17px;'
    boxShadow: 0px 2px 1px ${colors.shadow}
`

const IconContainer = styled.View`
    height: 100%
    width: 100%
    padding: 1px 1px 1px 1px  
    justify-content: center
    align-items: center
`

interface TransparentIconButtonProps {
    icon: string
    viewBox: string
    onPress: (() => void)
    btnStyles?: ViewStyle
}

const TransparentIconButton: FunctionComponent<TransparentIconButtonProps> = (props) => {
  return (
    <ButtonView style={props.btnStyles}>
        <IconContainer>
            <IconPathHandler icon={props.icon} viewBox={props.viewBox}/>
        </IconContainer>
    </ButtonView>
  )
}

export default TransparentIconButton