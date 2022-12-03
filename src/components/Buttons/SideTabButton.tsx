import React , { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { GestureResponderEvent, StyleProp, ViewStyle  } from 'react-native'
import Svg from 'react-native-svg'
import IconPathHandler from '../IconPathHandler'


import { colors } from '../colors'


const ButtonView = styled.TouchableOpacity`
    width: 50px
    height: 47px
    background-color: ${colors.white}
    border-top-left-radius: 20px
    border-bottom-left-radius: 20px
    box-shadow: 0px 3px 1px ${colors.shadow}

`

const IconContainer = styled.View`
    height: 100%
    width: 100%
    margin-left: 12px
    margin-top: 13px
`

const svgProps = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 50 47",
    fill: 'none'
}

interface ButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined
    btnStyles?: StyleProp<ViewStyle>
    icon: string
}


const SideTabButton: FunctionComponent<ButtonProps> = (props) => {

  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
        <IconContainer>
            <Svg width="100%" height="100%" viewBox="0 0 50 47" fill="none">
                <IconPathHandler icon={props.icon}/>
            </Svg>
        </IconContainer>
    </ButtonView>
  )
}

export default SideTabButton