import { FunctionComponent } from 'react'
import styled from 'styled-components/native'


//import global colors
import { colors } from "../colors"

const StyledText = styled.Text`
    font-size: 24px;
    color: ${colors.white};
    text-align: left;
    font-family: Raleway-ExtraLight
`

//types
import { TextProps } from './types'

const RegularText : FunctionComponent<TextProps> = (props) => {
    return  <StyledText style={props.textStyles}>{props.children}</StyledText> 
}


export default RegularText