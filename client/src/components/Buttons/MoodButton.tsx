import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
import  { LinearGradient , LinearGradientPoint } from "expo-linear-gradient";


//components
import { colors, gradients, positions } from "../colors"
import RegularText from "../Text/RegularText";

const ButtonView = styled.TouchableOpacity`
    flex: 1 
    align-items: center
    justify-content: center
    maxWidth: 72px
    minWidth: 70px
    height: 28px

    boxShadow: 0px 2px 1px ${colors.shadow}
    padding-top: 2%
    padding-bottom 2%

`



//types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>
    onPress: ((event : GestureResponderEvent) => void) | undefined
    textStyles?: StyleProp<TextStyle>
    children: React.ReactNode
    gradient: any[]
    gradStart: LinearGradientPoint
    gradEnd : LinearGradientPoint
}

const MoodButton: FunctionComponent<ButtonProps> =  (props) => {
    const gradientstyle : StyleProp<ViewStyle> = {
        width: "100%",
        borderRadius: props.btnStyles['borderRadius'] - 1,
        alignItems: "center",
        justifyContent: "center",
        flex: 1
        
    }
    
    return (
       
         <ButtonView onPress={props.onPress} style={props.btnStyles}>
             <LinearGradient
                colors={props.gradient}
                style={gradientstyle}
                start={props.gradStart}
                end={props.gradEnd}
            >
                    <RegularText textStyles={props.textStyles}>{props.children}</RegularText> 
            </LinearGradient>             
        </ButtonView>
    
    )
}

export default MoodButton