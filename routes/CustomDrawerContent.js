import { View, Text } from 'react-native'
import React from 'react'

export default function CustomDrawerContent(props) {
    const { navigation } = props
  return (
    <View style={{flex:1,backgroundColor:'red',paddingTop:50,paddingLeft:20}} >
     <View style={{height:'20%',backgroundColor:'green'}} >
        
     </View>
     <View style={{height:'80%',backgroundColor:'blue'}} >

     </View>
    </View>
  )
}