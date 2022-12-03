import React , { FunctionComponent } from 'react'
import { StyleProp, TextStyle } from 'react-native';
import styled from "styled-components/native";



//custom components
import { colors } from '../colors';
import RegularText from '../Text/RegularText'
import SmallText from '../Text/SmallText'


interface GreetingProps {
    mainText: string
    subText: string
    mainTextStyles?: StyleProp<TextStyle>
    subTextStyles?: StyleProp<TextStyle>
}

const StyledView = styled.View`
    flex-direction: column
    flex: 1
    justify-content: left
    padding-top: 10px
`


const Greeting: FunctionComponent<GreetingProps> = (props) => {
  
    return (
        <StyledView>
            <RegularText 
                textStyles={[{
                    color: colors.gray,
                    fontSize: 26,
                },
                props.mainTextStyles
            ]}>
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles= {[{
                    color: colors.graydark,
                    fontSize: 16
                },
                props.subTextStyles
            ]}
            >
                {props.subText}
            </SmallText>
        </StyledView>
  )
}


export default Greeting
