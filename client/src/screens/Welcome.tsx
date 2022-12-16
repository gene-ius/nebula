import React , { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'

//custom components 
import { gradients , positions} from '../components/colors'
import { Container } from '../components/shared'
import BigText from '../components/Text/BigText'
import RegularText from '../components/Text/RegularText'
import RegularButton from '../components/Buttons/RegularButton'
import { useNavigationContainerRef } from '@react-navigation/native'

const Gradient = styled(LinearGradient).attrs({
    colors: gradients.background,
    start:  positions.twothirds,
    end: positions.bottom
})`
    width: 100%
    height: 100%

`
const WelcomeContainer = styled(Container)`
    justify-content: space-between;
    width: 100%
    height 100%
`

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 60%;
    align-items: center;
    margin-top: 75%
`

const BottomSection = styled.View`
    width: 100%;
    flex: 1; 
    padding: 50px;
`   

// TODO : Add 3D Visual Animation Canvas onto Welcome Screen
const Welcome: FunctionComponent = () => {

    return (
        <>
            <StatusBar style='light'/>
            <WelcomeContainer>
                <Gradient>
                <TopSection>
                        <BigText>NEBULA</BigText>
                        <RegularText>your thoughts, visualized.</RegularText>
                </TopSection>
                <BottomSection>
                    <RegularButton gradient={gradients.landingprimary} onPress={undefined} btnStyles={{borderRadius: 35, height: "30%"}}>
                        E N T E R
                    </RegularButton>
                </BottomSection>
                </Gradient>
            </WelcomeContainer>
        </>
    )
}

export default Welcome