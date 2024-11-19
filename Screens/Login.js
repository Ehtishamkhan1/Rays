import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Back from "../assets/Back.png";
import Raylogo from "../assets/Raylogo.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";



export default function Login() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Back}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }} // Image background styles
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Logo Section */}
        <View
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 50,
          }}
        >
          <Image
            source={Raylogo}
            style={{ width: 160, height: 150, top: 50 }}
          ></Image>
        </View>

        {/* Input Fields Section */}
        <View style={{ width: "100%", height: "60%", paddingRight: 20 }}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            {/* Username Input */}
            <View
              style={{
                width: "80%",
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                paddingLeft: 15, // Padding to accommodate icon
              }}
            >
              <Ionicons
                name="person-circle-outline"
                size={24}
                color="white"
                style={{ position: "absolute", left: 15 }} // Icon inside input
              />
              <TextInput
                placeholder="User Name"
                style={{
                  flex: 1,
                  height: 50,
                  paddingLeft: 40, // Additional padding to avoid text overlap with icon
                  color: "white",
                }}
                placeholderTextColor="white"
              />
            </View>

            {/* Password Input */}
            <View
              style={{
                width: "80%",
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                paddingLeft: 15, // Padding to accommodate icon
              }}
            >
              <AntDesign
                name="lock1"
                size={24}
                color="white"
                style={{ position: "absolute", left: 15 }} // Icon inside input
              />
              <TextInput
                placeholder="Password"
                style={{
                  flex: 1,
                  height: 50,
                  paddingLeft: 40, // Additional padding to avoid text overlap with icon
                  color: "white",
                }}
                placeholderTextColor="white"
              />
            </View>
          </View>

          {/* Sign-In Button */}
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              paddingTop: 50,
              
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#BC1E2D",
                width: "70%",
                height: 51,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={()=> navigation.navigate("MyDrawer")}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
            <View style={{display:"flex",flexDirection:"row",paddingTop:20, gap:10}} >
            <Text style={{color:"white"}} >Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Register")} >
            <Text style={{color:"#BC1E2D",fontWeight:"bold"}} >Register here</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
