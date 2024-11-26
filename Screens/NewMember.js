import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Image, Platform, StyleSheet, TextInput, KeyboardAvoidingView, Keyboard } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";

export default function NewMember() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    if (event.type === "set") {
      if (Platform.OS === "ios") {
        setTimeout(() => {
          setShow(false);
        }, 3000); 
      } else {
        setShow(false);
      }
    } else if (event.type === "dismissed") {
      setShow(false);
    }
  };

  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Profile Image */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderColor: "#F3AF30",
            marginBottom: -30,
            borderWidth: image ? 0 : 2,
            borderRadius: 90,
            width: 100,
            height: 100,
          }}
        >
          {image ? (
            <View>
              <Image
                source={{ uri: image }}
                style={{ width:105, height: 100, borderRadius: 50 }}
              />
            </View>
          ) : (
            <Ionicons name="person-circle-outline" size={70} color="gray" />
          )}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 68,
              right: -3,
              backgroundColor: "white",
              borderRadius: 50,
              padding: -5,
            }}
            onPress={handleImagePick}
          >
            <AntDesign name="pluscircle" size={24} color="#BC1E2D" />
          </TouchableOpacity>
        </View>

        {/* Inputs */}
        <TextInput
          placeholder="Name"
          placeholderTextColor={"black"}
          style={{
            width: "85%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: 50,
            paddingLeft: 20,
            marginTop: 50,
            backgroundColor: "white",
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "#F3AF30",
            color: "black",
            marginBottom: 10,
          }}
        ></TextInput>
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={"black"}
          style={{
            width: "85%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: 50,
            paddingLeft: 20,
            marginTop: 3,
            borderRadius: 20,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#F3AF30",
            color: "black",
            marginBottom: 10,
          }}
        ></TextInput>
        <TextInput
          placeholder="Driving License"
          placeholderTextColor={"black"}
          style={{
            width: "85%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: 50,
            paddingLeft: 20,
            marginTop: 3,
            borderRadius: 20,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#F3AF30",
            color: "black",
            marginBottom: 10,
          }}
        ></TextInput>
        <TextInput
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor={"black"}
          style={{
            width: "85%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: 50,
            paddingLeft: 20,
            marginTop: 3,
            borderRadius: 20,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#F3AF30",
            color: "black",
            marginBottom: 10,
          }}
          
          returnKeyType="done"
          onPress={Keyboard.dismiss}
        ></TextInput>
        <View
          style={{
            width: "85%",
            height: 50,
            position: "relative",
            marginBottom: 15,
          }}
        >
          <TextInput
            placeholder="DOB"
            placeholderTextColor={"gray"}
            value={formattedDate}
            editable={false}
            style={{
              width: "100%",
              height: 50,
              paddingLeft: 20,
              marginTop: 3,
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#F3AF30",
              color: "black",
            }}
          />
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: [{ translateY: -12 }],
            }}
          >
            <AntDesign name="calendar" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onChange}
            maximumDate={new Date()}
            textColor="black"
          />
        )}

        <TextInput
          placeholder="Comments"
          placeholderTextColor={"black"}
          style={{
            width: "85%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: 100,
            paddingLeft: 20,
            paddingBottom: 45,
            marginTop: 3,
            borderRadius: 20,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#F3AF30",
            color: "black",
            marginBottom: 10,
          }}
        ></TextInput>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 12,
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#BC1E2D",
              width: "45%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 25,
              height: 50,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    height: "100%",
    backgroundColor: "white",
  },
});
