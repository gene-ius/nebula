import React , {FunctionComponent} from 'react'
import styled from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'

import {colors , gradients ,positions} from '../colors'
import SmallText from '../Text/SmallText'


const Gradient = styled(LinearGradient).attrs({
    colors: gradients.headerbutton,
    start:  positions.top,
    end: {x: 0.5, y: 0.45}
  })`
    width: 100%
    height: 100%
    flexDirection: column
    align-items: center
    borderTopLeftRadius: 30px
    borderTopRightRadius: 30px
  `

const FooterTabContainer = styled.View`
    width: 100%
    height: 9.5%
    alignContents: center
`

const ReelContainer = styled.View`
    width: 100%
    height: 25%
    justifyContent: left
    marginTop: 3%
`

const NewsBanner = () => {
  return (
    <FooterTabContainer>
        <Gradient>
            <SmallText textStyles={{fontFamily:"Raleway-Regular" , fontSize: 17, paddingTop: 8}}>RANDOMIZED REEL</SmallText>
            <ReelContainer>
                <SmallText textStyles={{textTransform: 'uppercase', fontSize: 20}}>this is something that has been on my mind for a while and i dont know how to explain it but ..</SmallText>
            </ReelContainer>
        </Gradient>
    </FooterTabContainer>
  )
}

export default NewsBanner