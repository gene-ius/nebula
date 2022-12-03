import React , { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

//custom components 
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import BigText from '../components/Text/BigText'
import SmallText from '../components/Text/SmallText'
import RegularButton from '../components/Buttons/RegularButton'

const WelcomeContainer = styled(Container)`
    background-color: ${colors.offwhite};
    justify-content: space-between;
    width: 100%
    height 100%
`

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 60%;
    padding: 25px;
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
            <StatusBar style='dark'/>
            <WelcomeContainer>
                <TopSection>
                    <BigText>NEBULA</BigText>
                    <SmallText>your thoughts, visualized.</SmallText>
                </TopSection>
                <BottomSection>
                    <RegularButton onPress={undefined}>
                        enter your mind...
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome