import React , { FunctionComponent }from 'react'
import styled from 'styled-components/native'
import Svg , { Path } from 'react-native-svg'
import { 
    ImageSourcePropType, 
    GestureResponderEvent, 
    ImageStyle,
    ViewStyle,
    StyleProp

} from "react-native";


import { colors } from '../colors';

const StyledView = styled.TouchableOpacity`
    flex-direction: column 
    height: 55px
    width: 55px
    border-radius: 15px
    background-color: white
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
    img?: ImageSourcePropType,
    imgStyle?: StyleProp<ImageStyle>,
    imgContainerStyle?: StyleProp<ViewStyle>
    onPress: (( event : GestureResponderEvent) => void) | undefined
}




const Profile : FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
        <StyledIconContainer>
            <Svg  width={svgProps.width} height={svgProps.height} fill={svgProps.fill} viewBox={svgProps.viewBox}>
                <Path d="M17.7333 15.8521C17.5875 15.8375 17.4125 15.8375 17.2521 15.8521C15.5782 15.7953 13.9922 15.0891 12.8299 13.8833C11.6676 12.6774 11.0203 11.0665 11.025 9.39167C11.025 5.81875 13.9125 2.91667 17.5 2.91667C18.3494 2.90135 19.1934 3.05347 19.984 3.36435C20.7745 3.67523 21.4961 4.13877 22.1075 4.72852C22.719 5.31827 23.2082 6.02267 23.5474 6.80151C23.8866 7.58034 24.0691 8.41836 24.0844 9.26771C24.0997 10.1171 23.9476 10.9611 23.6367 11.7517C23.3258 12.5422 22.8623 13.2638 22.2725 13.8752C21.6828 14.4867 20.9784 14.9759 20.1995 15.3151C19.4207 15.6543 18.5827 15.8368 17.7333 15.8521V15.8521ZM10.4417 21.2333C6.91251 23.5958 6.91251 27.4458 10.4417 29.7938C14.4521 32.4771 21.0292 32.4771 25.0396 29.7938C28.5688 27.4313 28.5688 23.5813 25.0396 21.2333C21.0438 18.5646 14.4667 18.5646 10.4417 21.2333V21.2333Z" stroke="black" stroke-opacity="0.33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </StyledIconContainer>
        
    </StyledView>
  )
}



export default Profile