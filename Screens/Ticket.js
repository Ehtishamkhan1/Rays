import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  RefreshControl
} from "react-native";
import React,{useState} from "react";

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import GivenpointTable from "../Components/GivenpointTable";
import { TouchableRipple } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Ticket() {
   
  const [refreshing, setRefreshing] = useState(false);

  // Function to handle refresh logic
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request or data fetch
    setTimeout(() => {
      setRefreshing(false); // End refreshing
    }, 2000); // Refresh time in milliseconds
  };

  return (
    // <ImageBackground source={Back} style={{ flex: 1 }}>
    <View style={{ flex: 1, backgroundColor: "white" }}>
      
      <View
        style={{
          height: 300,
          padding: 10,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <ScrollView 
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      } >
        <View
          style={{
            height: 260,
            display: "flex",
            alignItems: "center",
            paddingTop: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#F3AF30",
          }}
        >
          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              marginBottom: 5,
            }}
          >
            <TextInput
              label="Name"
              style={{
                width: "70%",
                backgroundColor: "transparent",
                color: "white",
                marginRight: 15,
              }} // Transparent background
              theme={{
                colors: {
                  text: "black",
                  placeholder: "black",
                  colors: "white",
                  primary: "#F3AF30",
                  onSurfaceVariant: "black",
                  onSurface: "black",
                  underlineColor: "transparent",
                },
              }}
              mode="outlined"
            />

            <TextInput
              label="ID"
              style={{
                width: "25%",
                backgroundColor: "transparent",
                color: "black",
              }} // Transparent background
              theme={{
                colors: {
                  text: "white",
                  placeholder: "white",
                  colors: "black",
                  primary: "#F3AF30",
                  onSurfaceVariant: "black",
                  onSurface: "black",
                  underlineColor: "transparent",
                },
              }}
              keyboardType="numeric"
              mode="outlined"
            />
          </View>

          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              marginTop: 15,
              marginBottom: 5,
            }}
          >
            <TextInput
              label="Machine"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                color: "black",
              }} // Transparent background
              theme={{
                colors: {
                  text: "black",
                  placeholder: "white",
                  colors: "white",
                  primary: "#F3AF30",
                  onSurfaceVariant: "black",
                  onSurface: "black",
                  underlineColor: "transparent",
                },
              }}
              mode="outlined"
            />
          </View>

          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              marginTop: 15,
            }}
          >
            <TextInput
              label="Amount"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                color: "black",
                position: "relative",
              }} // Transparent background
              theme={{
                colors: {
                  text: "white",
                  placeholder: "white",
                  colors: "white",
                  primary: "#F3AF30",
                  onSurfaceVariant: "black",
                  onSurface: "black",
                  underlineColor: "transparent",
                },
              }}
              mode="outlined"
            />
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 20,
              marginTop: 20,
              width: "90%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#BC1E2D",
                paddingVertical: 5,
                borderRadius: 10,
                width: "95%",
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Set Points
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </LinearGradient> */}
        {/* </View> */}
        </ScrollView>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 20,
          boxShadow: "5px 10px 8px rgba(0, 0, 0, 0.4)",
        }}
      >
        <GivenpointTable />
      </View>
    </View>
    // </ImageBackground>
  );
}
