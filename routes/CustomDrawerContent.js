import { View, Text, Image, TouchableOpacity, } from "react-native";
import React, { useState,useContext } from "react";
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
import { Switch } from "react-native-paper";
import { ThemeContext } from "../Context/ThemeContext";
// import { primaryColor } from "../constants/colors";








export default function CustomDrawerContent(props) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  

 const {theme, setIsDarkMode} = useContext(ThemeContext);

 const onToggleSwitch =()=>{
  setIsSwitchOn(!isSwitchOn);
  setIsDarkMode(!isSwitchOn);
 }
 

  const { navigation } = props;

  
  const data = [
    {
      id: 1,
      title: "Points",
      icon: <MaterialIcons name="scoreboard" size={24} color={theme.text} />,
      name: "Points",
    },
    {
      id: 2,
      title: "Ticket",
      icon: <Entypo name="ticket" size={24} color={theme.text} />,
      name: "Ticket",
    },
    {
      id: 3,
      title: "Bank & Expenses",
      icon: <FontAwesome name="bank" size={24} color={theme.text} />,
      name: "Banks",
    },
    {
      id: 4,
      title: "New Member",
      icon: <Ionicons name="person-add" size={24} color={theme.text} />,
      name: "Newmember",
    },
    {
      id: 5,
      title: "Settings",
      icon: <MaterialIcons name="settings" size={24} color={theme.text} />,
      name: "Setting",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <View
        style={{
          height: "30%",
          display: "flex",
          justifyContent:"flex-end",
          alignItems: "center",
          paddingBottom: 20
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
            color: theme.text,
          }}
        >
          Sophia
        </Text>
        <Text style={{ textAlign: "center", color: "#6C7072" }}>
          Ui/Ux Designer
        </Text>
        <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="#F3AF30"
          />
      </View>
      <View style={{ height: "70%", paddingLeft: 10,borderTopWidth:0.2,borderTopColor:"gray",paddingTop:10, }}>
        {data.map((item) => (
          <View
            key={item.id}
            style={{ display: "flex", flexDirection: "row", margin: 10 }}
          >
          <TouchableOpacity style={{ display: "flex", flexDirection: "row",width:"80%"}} onPress={() => navigation.navigate(item.name)}   >
              {/* <Image source={item.icon} style={{ width: 25, height: 25 }} /> */}
              {item.icon}
              <Text
                style={{ marginLeft: 10, paddingLeft: 10, marginBottom: 20,color:theme.text }}
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
