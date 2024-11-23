import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomTabbar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 70,justifyContent: 'center' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isFocused ? '#BC1E2D' : 'white', 
              borderRadius : 20,
              height : 50,
              marginHorizontal : 10,
              position : 'relative',
              top:10,
              boxShadow: '5px 5px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Text
              style={{
                color: isFocused ? 'white' : 'black', 
                fontWeight: isFocused ? 'bold' : 'normal',
                fontSize : isFocused ? 16 : 14

              }}
            >
              {options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
