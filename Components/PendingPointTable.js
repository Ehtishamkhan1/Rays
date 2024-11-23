import { View, Text, FlatList, Touchable } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function PendingPointTable() {
    const data = [
        { srNo: 1, no1: 101, no2: 201, time: '11:00 AM', country: 'USA' },
        { srNo: 2, no1: 102, no2: 202, time: '11:00 AM', country: 'UK' },
        { srNo: 3, no1: 103, no2: 203, time: '12:00 PM', country: 'Australia'},
        { srNo: 4, no1: 104, no2: 204, time: '01:00 PM', country: 'Canada' },
        { srNo: 5, no1: 105, no2: 205, time: '02:00 PM', country: 'Germany' },
        { srNo: 6, no1: 106, no2: 206, time: '03:00 PM', country: 'France' },
        { srNo: 7, no1: 107, no2: 207, time: '04:00 PM', country: 'Italy' },
        { srNo: 8, no1: 108, no2: 208, time: '05:00 PM', country: 'Spain' },
        { srNo: 9, no1: 109, no2: 209, time: '06:00 PM', country: 'Japan' },
        { srNo: 1, no1: 101, no2: 201, time: '10:00 AM', country: 'USA' },
        { srNo: 2, no1: 102, no2: 202, time: '11:00 AM', country: 'UK' },
        { srNo: 3, no1: 103, no2: 203, time: '12:00 PM', country: 'Australia'},
        { srNo: 4, no1: 104, no2: 204, time: '01:00 PM', country: 'Canada' },
        { srNo: 5, no1: 105, no2: 205, time: '02:00 PM', country: 'Germany' },
        { srNo: 6, no1: 106, no2: 206, time: '03:00 PM', country: 'France' },
        { srNo: 7, no1: 107, no2: 207, time: '04:00 PM', country: 'Italy' },
        { srNo: 8, no1: 108, no2: 208, time: '05:00 PM', country: 'Spain' },
        { srNo: 9, no1: 109, no2: 209, time: '06:00 PM', country: 'Japan' },
    ];

    const renderItem = ({ item }) => (
         <TouchableRipple 
         onPressIn={() => {}}
    rippleColor="rgba(212, 175, 55, .5)"
          >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 0.5, borderColor: 'grey' }}>
            <Text style={{ width: 70, textAlign: 'center' }}>{item.srNo}</Text>
            <Text style={{ width: 70, textAlign: 'center' }}>{item.no1}</Text>
            <Text style={{ width: 70, textAlign: 'center' }}>{item.no2}</Text>
            <Text style={{ width: 70, textAlign: 'center' }}>{item.time}</Text>
             <TouchableOpacity style={{ width: 70, }} ><FontAwesome6 name="add" size={24} color="black"  style={{alignSelf:'center'}} /></TouchableOpacity>
            {/* <Text style={{ width: 70, textAlign: 'center' }}>{item.country}</Text> */}
        </View>
        </TouchableRipple>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#f0f0f0', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 3 }}>
                <Text style={{ width: 70, textAlign: 'center', fontWeight: 'bold' }}>Sr.No</Text>
                <Text style={{ width: 70, textAlign: 'center', fontWeight: 'bold' }}>No.1</Text>
                <Text style={{ width: 70, textAlign: 'center', fontWeight: 'bold' }}>No.2</Text>
                <Text style={{ width: 70, textAlign: 'center', fontWeight: 'bold' }}>Time</Text>
                <Text style={{ width: 70, textAlign: 'center', fontWeight: 'bold' }}>Country</Text>
            </View>

            {/* FlatList for data with no header */}
            
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
