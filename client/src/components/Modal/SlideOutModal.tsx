import React , { FunctionComponent} from 'react'
import styled from 'styled-components/native'
import Modal , { Direction , OnSwipeCompleteParams}  from 'react-native-modal'
import { colors , gradients ,positions } from '../colors'
import { GestureResponderEvent, PanResponderGestureState } from 'react-native'
import SideTabButton from '../Buttons/SideTabButton'
import { LinearGradient } from 'expo-linear-gradient'

const Gradient = styled(LinearGradient).attrs({
  colors: gradients.headerbutton,
  start:  positions.bottom,
  end: positions.twothirds
})`
  width: 100%
  height: 100%
  borderBottomLeftRadius: 15,

`

const CardContainer = styled.View`
  width: 50%
  height: 65%
  background-color: ${colors.white}
  border-bottom-left-radius: 20px
  box-shadow: 0px 3px 1px ${colors.shadow}
`

const ModalView = styled.View`
  flex-direction: row
  width: 100%
  height: 85%%
  margin-top: 20%
  margin-left: 45%


`
interface SwipeModalProps {
  isVisible: boolean
  animationIn: any
  animationOut: any
  swipeDirection: Direction | Direction[]
  swipeThreshold: number
  onSwipeComplete: ((params: OnSwipeCompleteParams, gestureState: PanResponderGestureState) => void) | undefined
  closeHandler: ((event: GestureResponderEvent) => void)
  hasBackdrop: boolean
  tab?: string | null
  children?: React.ReactNode
  modalStyle?: any

}


const SlideOutModal: FunctionComponent<SwipeModalProps>  = (props) => {

  return (
    
        <Modal 
          isVisible={props.isVisible} 
          animationIn={props.animationIn} 
          animationOut={props.animationOut}
          swipeDirection={props.swipeDirection}
          swipeThreshold={props.swipeThreshold} 
          onSwipeComplete={props.onSwipeComplete}
          style={props.modalStyle}
          hasBackdrop={props.hasBackdrop}
        >
          <ModalView>
            {props.tab !== null ? <SideTabButton icon='filter' onPress={props.closeHandler}/> : null}
            <CardContainer>
              <Gradient>
              {props.children}
              </Gradient>
            </CardContainer>
            
          </ModalView>
        </Modal>
    
  )
}

export default SlideOutModal