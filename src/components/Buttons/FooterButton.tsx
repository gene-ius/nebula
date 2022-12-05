import React , { FunctionComponent } from 'react'
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'


import { colors, gradients, positions } from '../colors'
import IconPathHandler from '../IconPathHandler'

const Gradient = styled(LinearGradient).attrs({
    colors: gradients.footerbutton,
    start:  positions.top,
    end: positions.half
})`
    width: 100%
    height: 100%
    borderRadius: 35,
`

const ButtonView = styled.TouchableOpacity`
    width: 60px
    height: 60px
    border-radius: 35px
    background-color: ${colors.white}
    box-shadow: 0px 4px 4px ${colors.shadow}   
`

const IconContainer = styled.View`
    height: 100%
    width: 100%
    padding: 15px 15px 15px 15px
    justify-content: center
    align-items: center
`

interface ButtonProps {
    onPress: ((event: GestureResponderEvent) => void ) | undefined
    btnStyles?: StyleProp<ViewStyle>
    icon: string
    viewBox: string
}




const FooterButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
        <Gradient>
            <IconContainer>
                <IconPathHandler icon={props.icon} viewBox={props.viewBox}/>
            </IconContainer>
        </Gradient>
    </ButtonView>
  )
}

export default FooterButton