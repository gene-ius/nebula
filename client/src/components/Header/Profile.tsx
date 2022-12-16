import React , { FunctionComponent }from 'react'
import styled from 'styled-components/native'
import { 
    GestureResponderEvent, 
    ViewStyle,
    StyleProp

} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


import { colors , gradients, positions} from '../colors';
import IconPathHandler from '../IconPathHandler';

const Gradient = styled(LinearGradient).attrs({
    colors: gradients.headerbutton,
    start:  positions.top,
    end: positions.bottom
})`
    width: 100%
    height: 100%
    borderRadius: 20,

`
const StyledView = styled.TouchableOpacity`
    flex-direction: column 
    height: 55px
    width: 55px
    border-radius: 15px
    box-shadow: 0 3px 1px ${colors.shadow}
`

const StyledIconContainer = styled.View`
    width: 100%
    height: 100%
    padding: 8px 8px 8px 8px
    border-radius: 20px
`

const svgProps = {
    width: "100%",
    height: "100%",
    fill: "none",
    viewBox:'0 0 35 35'
}

interface ProfileProps {
    imgContainerStyle?: StyleProp<ViewStyle>
    onPress: (( event : GestureResponderEvent) => void) | undefined
}




const Profile : FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
        <Gradient>
            <StyledIconContainer>
                <IconPathHandler icon="profile" viewBox={svgProps.viewBox}/>
            </StyledIconContainer> 
        </Gradient> 
    </StyledView>
  )
}



export default Profile