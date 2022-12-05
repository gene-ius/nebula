import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
import  { LinearGradient } from "expo-linear-gradient";


//components
import { colors, gradients, positions } from "../colors"
import RegularText from "../Text/RegularText";

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    width: 100%
    padding: 20px;
    border-radius: 35px;'
    boxShadow: 0px 2px 1px ${colors.shadow}
`


const gradientstyle : StyleProp<ViewStyle> = {
    width: "100%",
    borderRadius: 35,
    alignItems: "center",
    paddingBottom: "5%",
    paddingTop: "5%"
    
}

//types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>
    onPress: ((event : GestureResponderEvent) => void) | undefined
    textStyles?: StyleProp<TextStyle>
    children: React.ReactNode
    gradient: any[]
}

const RegularButton: FunctionComponent<ButtonProps> =  (props) => {
    return (
       
         <ButtonView onPress={props.onPress} style={props.btnStyles}>
             <LinearGradient
                colors={props.gradient}
                style={gradientstyle}
            >
                    <RegularText textStyles={props.textStyles}>ENTER</RegularText> 
            </LinearGradient>             
        </ButtonView>
    
    )
}

export default RegularButton