import React, { FunctionComponent} from 'react'
import Svg , {Path} from 'react-native-svg'


interface pathProps {
    icon: string
    viewBox: string
    toggled?: boolean
}

const IconPathHandler : FunctionComponent<pathProps> = (props) => {

    switch (props.icon) {
     case 'addsquare': 
         return (
            <Svg width="100%" height="100%" viewBox={props.viewBox} fill="none">
                <Path 
                    d="M8 12H16M12 16V8M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
                    stroke="white" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
            </Svg> 
         )
         
     case 'filter':
        return (
            <Svg width="100%" height="100%" viewBox={props.viewBox} fill="none">
                <Path 
                d="M10.93 2.09998L6.00002 9.99998M5.40002 2.09998H18.6C19.7 2.09998 20.6 2.99998 20.6 4.09998V6.29998C20.6 7.09998 20.1 8.09998 19.6 8.59998L15.3 12.4C14.7 12.9 14.3 13.9 14.3 14.7V19C14.3 19.6 13.9 20.4 13.4 20.7L12 21.6C10.7 22.4 8.90002 21.5 8.90002 19.9V14.6C8.90002 13.9 8.50002 13 8.10002 12.5L4.30002 8.49998C3.80002 7.99998 3.40002 7.09998 3.40002 6.49998V4.19998C3.40002 2.99998 4.30002 2.09998 5.40002 2.09998Z" 
                stroke="white" 
                stroke-opacity="0.25" 
                stroke-width="1.5" 
                stroke-miterlimit="10" 
                stroke-linecap="round" 
                stroke-linejoin="round"/>
            </Svg>
        )
        
     case 'profile':
        return (
            <Svg width="100%" height="100%" viewBox={props.viewBox} fill="none">
                <Path 
                    d="M17.7333 15.8521C17.5875 15.8375 17.4125 15.8375 17.2521 15.8521C15.5782 15.7953 13.9922 15.0891 12.8299 13.8833C11.6676 12.6774 11.0203 11.0665 11.025 9.39167C11.025 5.81875 13.9125 2.91667 17.5 2.91667C18.3494 2.90135 19.1934 3.05347 19.984 3.36435C20.7745 3.67523 21.4961 4.13877 22.1075 4.72852C22.719 5.31827 23.2082 6.02267 23.5474 6.80151C23.8866 7.58034 24.0691 8.41836 24.0844 9.26771C24.0997 10.1171 23.9476 10.9611 23.6367 11.7517C23.3258 12.5422 22.8623 13.2638 22.2725 13.8752C21.6828 14.4867 20.9784 14.9759 20.1995 15.3151C19.4207 15.6543 18.5827 15.8368 17.7333 15.8521V15.8521ZM10.4417 21.2333C6.91251 23.5958 6.91251 27.4458 10.4417 29.7938C14.4521 32.4771 21.0292 32.4771 25.0396 29.7938C28.5688 27.4313 28.5688 23.5813 25.0396 21.2333C21.0438 18.5646 14.4667 18.5646 10.4417 21.2333V21.2333Z" 
                    stroke="white" 
                    stroke-opacity="0.33" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>

            </Svg>
            )
     case 'image':
        return (
             <Svg width="100%" height="100%" viewBox={props.viewBox} fill='none'>
                <Path 
                    d="M21.68 16.96L18.55 9.65C17.49 7.17 15.54 7.07 14.23 9.43L12.34 12.84C11.38 14.57 9.59005 14.72 8.35005 13.17L8.13005 12.89C6.84005 11.27 5.02005 11.47 4.09005 13.32L2.37005 16.77C1.16005 19.17 2.91005 22 5.59005 22H18.35C20.95 22 22.7 19.35 21.68 16.96ZM6.97005 8C7.7657 8 8.52876 7.68393 9.09137 7.12132C9.65398 6.55871 9.97005 5.79565 9.97005 5C9.97005 4.20435 9.65398 3.44129 9.09137 2.87868C8.52876 2.31607 7.7657 2 6.97005 2C6.1744 2 5.41134 2.31607 4.84873 2.87868C4.28612 3.44129 3.97005 4.20435 3.97005 5C3.97005 5.79565 4.28612 6.55871 4.84873 7.12132C5.41134 7.68393 6.1744 8 6.97005 8V8Z" 
                    stroke="white" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
             </Svg>
        )
      case 'upload':
        return (
            <Svg  width="100%" height="100%" viewBox={props.viewBox} fill='none'>
                <Path 
                    d="M12 15.5V9.5M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" 
                    stroke="white" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
                <Path 
                    d="M9 11.5L12 8.5L15 11.5" 
                    stroke="white" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
            </Svg>
        ) 
      case 'shuffle':
        return (
            <Svg width="100%" height="100%" viewBox={props.viewBox} fill="none">
                <Path 
                    d="M3 17.98L5.55 17.99C6.46 17.99 7.31 17.54 7.81 16.79L14.2 7.20999C14.4474 6.83804 14.7836 6.53356 15.1782 6.32406C15.5727 6.11456 16.0133 6.00662 16.46 6.00999L21.01 6.02999M19 19.98L21 17.98M8.89 8.61999L7.81 7.11999C7.56022 6.77032 7.22987 6.48598 6.84693 6.29103C6.46398 6.09607 6.0397 5.99624 5.61 5.99999L3 6.00999M12.97 15.38L14.19 16.95C14.7 17.61 15.5 18 16.34 18L21.01 17.98M21 6.01999L19 4.01999" 
                    stroke="white" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
            </Svg>
        ) 
        

    } 
    
  
}

export default IconPathHandler