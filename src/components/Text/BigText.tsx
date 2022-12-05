import { FunctionComponent } from 'react'
import styled from 'styled-components/native'


//import global colors
import { colors } from "../colors"

const StyledText = styled.Text`
    font-size: 96px;
    color: ${colors.white};
    text-align: center;
    font-family: Raleway-Dots 
    
`

//types
import { TextProps } from './types'

export const BigText : FunctionComponent<TextProps> = (props) => {
    return  <StyledText style={props.textStyles}>{props.children}</StyledText> 
}

export default BigText