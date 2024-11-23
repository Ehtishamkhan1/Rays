import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Sophia from "../assets/Sophia.png";
import Point from "../assets/Point.png";
import Ticket from "../assets/Ticket.png";
import Bank from "../assets/Bank.png";
import NewMember from "../assets/Newmember.png";
import Settings from "../assets/Setting.png";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';







export default function CustomDrawerContent(props) {
  const { navigation } = props;
  
  const data = [
    {
      id: 1,
      title: "Points",
      icon: <MaterialIcons name="scoreboard" size={24} color="black" />,
      name: "Points",
    },
    {
      id: 2,
      title: "Ticket",
      icon: <Entypo name="ticket" size={24} color="black" />,
      name: "Ticket",
    },
    {
      id: 3,
      title: "Bank & Expenses",
      icon: <FontAwesome name="bank" size={24} color="black" />,
      name: "Bank",
    },
    {
      id: 4,
      title: "New Member",
      icon: <Ionicons name="person-add" size={24} color="black" />,
      name: "Newmember",
    },
    {
      id: 5,
      title: "Settings",
      icon: <MaterialIcons name="settings" size={24} color="black" />,
      name: "Setting",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "30%",
          display: "flex",
          justifyContent:"flex-end",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          paddingBottom: 45
        }}
      >
        <Image
          source={Sophia}
          style={{ width: 85, height: 80, borderRadius: 50 }}
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
            color: "#0F0F0F",
          }}
        >
          Sophia
        </Text>
        <Text style={{ textAlign: "center", color: "#6C7072" }}>
          Ui/Ux Designer
        </Text>
      </View>
      <View style={{ height: "70%", paddingLeft: 10,borderTopWidth:0.2,borderTopColor:"gray",paddingTop:10,backgroundColor:"#F5F5F5" }}>
        {data.map((item) => (
          <View
            key={item.id}
            style={{ display: "flex", flexDirection: "row", margin: 10 }}
          >
          <TouchableOpacity style={{ display: "flex", flexDirection: "row",width:"80%"}} onPress={() => navigation.navigate(item.name)}   >
              {/* <Image source={item.icon} style={{ width: 25, height: 25 }} /> */}
              {item.icon}
              <Text
                style={{ marginLeft: 10, paddingLeft: 10, marginBottom: 20 }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
