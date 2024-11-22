import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import Back from '../assets/Back.png'

export default function Dashboard() {
  return (
    <ImageBackground source={Back} style={{flex:1}}  >
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}} >
      <Text style={{fontSize:30,color:"white"}} >Points</Text>
     </View>
    </ImageBackground>
  )
}