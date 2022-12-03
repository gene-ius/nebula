import React , { FunctionComponent, useState } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { OrbitControls, Environment } from '@react-three/drei/native'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import axios from 'axios'

//custom components
import { colors } from '../components/colors'
import { Container, FlexContainer } from '../components/shared'
import ComposeButton from '../components/Buttons/ComposeButton'
import SideTabButton from '../components/Buttons/SideTabButton'
import SlideOutModal from '../components/Modal/SlideOutModal'
import ExpandingModal from '../components/Modal/ExpandingModal'
import ComposerView from '../components/InputView/ComposerView'

//Test Canvas Components
import TestBox from '../components/3DCanvas/TestBox'
import Nebula from '../components/3DCanvas/TestNeb'

import {data} from '../components/3DCanvas/nodedata'

//Assets

const HomeContainer = styled(FlexContainer)`
    background-color: ${colors.offwhite}
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
    padding-top: 20px
    flex: 0
    
`

const FooterContainer = styled(Container)`
    justify-content: center
    align-items: center
    height: 80px


`

//types

interface Idea {
    header: string
    body: string
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

    const composerUpSwipe = () => {
        //TODO: submit note
        setComposerModalVisible(!isComposerModalVisible)
    }

    const composerToggle = () => {
        setComposerModalVisible(!isComposerModalVisible)
    }

  return (
    <>

        <HomeContainer>
            <StatusBar style='dark'/>
            <ModalsContainer>
                <SlideOutModal
                    isVisible={isFilterModalVisible}
                    animationIn={"slideInRight"}
                    animationOut={"slideOutRight"}
                    swipeDirection={'right'}
                    swipeThreshold={100}
                    onSwipeComplete={()=> {setFilterModalVisible(false)}}
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
                <ComposeButton onPress={composerToggle}/>
            </FooterContainer>
        </HomeContainer> 
    </>
    
  )
}

export default Home



