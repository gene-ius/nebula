import React , { FunctionComponent } from 'react'
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native'
import Svg , { Path } from 'react-native-svg'
import styled from 'styled-components/native'


import { colors } from '../colors'



const ButtonView = styled.TouchableOpacity`
    width: 60px
    height: 60px
    border-radius: 35px
    background-color: ${colors.white}
    box-shadow: 0px 5px 3px ${colors.shadow}   
`

const IconContainer = styled.View`
    height: 100%
    width: 100%
    padding: 15px 15px 15px 15px
    justify-content: center
    align-items: center
`

const svgProps = {
    width: "100%",
    height: "100%",
    fill: "#AFAFAF"
}

interface ButtonProps {
    onPress: ((event: GestureResponderEvent) => void ) | undefined
    btnStyles?: StyleProp<ViewStyle>
    icon?: ImageSourcePropType

}




const ComposeButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
        <IconContainer>
            <Svg width="100%" height="100%" viewBox="0 0 40 40" fill='none'>
                <Path 
                    d="M13.3333 20H26.6667M20 26.6667V13.3334M15 36.6667H25C33.3333 36.6667 36.6667 33.3334 36.6667 25V15C36.6667 6.66671 33.3333 3.33337 25 3.33337H15C6.66668 3.33337 3.33334 6.66671 3.33334 15V25C3.33334 33.3334 6.66668 36.6667 15 36.6667Z" 
                    stroke="black" 
                    stroke-opacity="0.5" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
            </Svg>
        </IconContainer>
    </ButtonView>
  )
}

export default ComposeButton