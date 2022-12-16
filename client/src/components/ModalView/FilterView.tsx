import React , {FunctionComponent, useState} from 'react'
import {Picker} from '@react-native-picker/picker'
import styled from 'styled-components/native'
import RegularText from '../Text/RegularText'
import SmallText from '../Text/SmallText'

import { colors } from '../colors'


const ButtonView = styled.View`
    width: 100%
    height: 100%
    marginLeft: 3%
    marginRight: 3%
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    column-gap: 5px

`
const CheckContainer = styled.ScrollView`
  flexDirection: column
  paddingTop: 8px

`

const FilterView = () => {
  
  const [selectedInterval, setSelectedInterval] = useState('');

  return (
    <CheckContainer>
      <RegularText textStyles={{textAlign: 'center',fontSize: 20 , zIndex: 1}}>
        Your Mind...
      </RegularText>
      <Picker
        itemStyle={{color: 'white', fontSize: 12, fontFamily: 'ChakraPetch-Light'}}
        style={{alignSelf: 'center',width: '90%', height: '10%', position: 'relative', top: '-25%'}}
        mode='dropdown'
        selectedValue={selectedInterval}
        onValueChange={(val, idx) => 
          setSelectedInterval(val)
        }>
           <Picker.Item label='Today' value={'today'}/>
           <Picker.Item label='This Week' value={'week'}/>
           <Picker.Item label='This Month' value={'month'}/>
           <Picker.Item label='This Year' value={'year'}/>
           <Picker.Item label='All Time' value={'all'}/>
        </Picker>
        <SmallText textStyles={{textAlign: 'center',fontSize: 14 , zIndex: 1, paddingTop: '35%'}}>
          Mood Filter
        </SmallText>
        <ButtonView>
          {/* Define Buttons Here : Have to Create Mood Button JSX */}
        </ButtonView>

    </CheckContainer>
  )
}

export default FilterView