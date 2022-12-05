import React , { FunctionComponent, useState } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { OrbitControls, Environment } from '@react-three/drei/native'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import axios from 'axios'
import {LinearGradient} from 'expo-linear-gradient'

//custom components
import { gradients , positions} from '../components/colors'
import { Container, FlexContainer } from '../components/shared'
import FooterButton from '../components/Buttons/FooterButton'
import SideTabButton from '../components/Buttons/SideTabButton'
import SlideOutModal from '../components/Modal/SlideOutModal'
import ExpandingModal from '../components/Modal/ExpandingModal'
import ComposerView from '../components/InputView/ComposerView'
import NewsBanner from '../components/Footer/NewsBanner'

//Test Canvas Components
import TestBox from '../components/3DCanvas/TestBox'
import Nebula from '../components/3DCanvas/TestNeb'

import {data} from '../components/3DCanvas/nodedata'

//Assets

const Gradient = styled(LinearGradient).attrs({
    colors: gradients.background,
    start:  positions.twothirds,
    end: positions.bottom
})`
    width: 100%
    height: 100%

`

const HomeContainer = styled(FlexContainer)`
    
    width: 100%
    height:100%
    flex: 1
`

const CanvasContainer = styled(FlexContainer)`
    width:100%
    height: 100%
    flex: 3
`


const ModalsContainer = styled(FlexContainer)`
    width: 100%
    height: 100%
    flex: 0
`

const ButtonsContainer = styled(FlexContainer)`
    width: 100%
    flex-direction: row-reverse
    z-index: 1
    padding-top: 30%
    flex: 0
    
`

const FooterContainer = styled(Container)`
    width: 100%
    height: 30%
    flex-direction: row
    justifyContent: space-between
    paddingLeft: 3.6%
    paddingRight: 3.6%
    paddingBottom: 3%
    flex: 0
    zIndex: 1
`

//types

interface Idea {
    header: string
    body: string
    mood: string
    image?: undefined
}

const Home: FunctionComponent = () => {

    const [isFilterModalVisible, setFilterModalVisible] = useState(false)
    const [isComposerModalVisible, setComposerModalVisible] = useState(false)
    const [ideas, setIdeas] = useState([])

    const toggleFilterModal = () => {
        setFilterModalVisible(!isFilterModalVisible)
    }

    const updateIdeas = async (idea : string) => {
        if (idea == '') return
        composerToggle()
        setIdeas([idea, ...ideas])
        
    }


    const composerToggle = () => {
        setComposerModalVisible(!isComposerModalVisible)
    }

  return (
    <>

        <HomeContainer>
            <Gradient>
            <StatusBar style='light'/>
            <ModalsContainer>
                <SlideOutModal
                    isVisible={isFilterModalVisible}
                    animationIn={"slideInRight"}
                    animationOut={"slideOutRight"}
                    swipeDirection={'right'}
                    swipeThreshold={100}
                    onSwipeComplete={()=> {setFilterModalVisible(false)}}
                    closeHandler={(e) => {setFilterModalVisible(false)}}
                    hasBackdrop={true}
                    tab='filter'
                    />
                <ExpandingModal
                    isVisible={isComposerModalVisible}
                    animationIn={'zoomIn'}
                    animationOut={'zoomOut'}
                    dismissAction={composerToggle}
                    hasBackdrop={true}
                    >
                        <ComposerView submitHandler={updateIdeas}/>
                </ExpandingModal>
            </ModalsContainer>
            <ButtonsContainer>
                <SideTabButton onPress={toggleFilterModal} icon='filter'/>
            </ButtonsContainer>  
            <CanvasContainer>
                <Canvas camera={{ position: [0, -10, 20], fov: 40 }}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Nebula range={ideas.length} data={data}/> 
                </Canvas >
            </CanvasContainer>
            <FooterContainer>
                <FooterButton icon={'shuffle'} viewBox={'0 0 24 24'}onPress={() => {}}/>
                <FooterButton icon={'addsquare'} viewBox={'0 0 24 24'} onPress={composerToggle}/>
            </FooterContainer>
            <NewsBanner/>
            </Gradient>
        </HomeContainer> 
    </>
    
  )
}

export default Home



