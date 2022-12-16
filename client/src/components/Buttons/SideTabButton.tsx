import React , { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { GestureResponderEvent, StyleProp, ViewStyle  } from 'react-native'
import Svg from 'react-native-svg'
import IconPathHandler from '../IconPathHandler'
import { LinearGradient } from 'expo-linear-gradient'


import { colors , gradients, positions} from '../colors'

const Gradient = styled(LinearGradient).attrs({
    colors: gradients.headerbutton,
    start:  positions.top,
    end: positions.bottom
})`
    width: 100%
    height: 100%
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,

`


const ButtonView = styled.TouchableOpacity`
    width: 50px
    height: 47px
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

interface ButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined
    btnStyles?: StyleProp<ViewStyle>
    icon: string
}


const SideTabButton: FunctionComponent<ButtonProps> = (props) => {

  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
        <Gradient>
            <IconContainer>
                    <IconPathHandler viewBox='0 0 50 47' icon={props.icon}/>
            </IconContainer>
        </Gradient> 
    </ButtonView>
  )
}

export default SideTabButton