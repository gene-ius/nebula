import { FunctionComponent } from 'react'
import styled from 'styled-components/native'


//import global colors
import { colors } from "../colors"

const StyledText = styled.Text`
    font-size: 13px;
    color: ${colors.white};
    text-align: left;
    font-family: ChakraPetch-Light
`

//types
import { TextProps } from './types'

const SmallText : FunctionComponent<TextProps> = (props) => {
    return  <StyledText style={props.textStyles}>{props.children}</StyledText> 
}

export default SmallText