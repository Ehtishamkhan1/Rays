import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import GivenpointTable from "../Components/GivenpointTable";
import { TouchableRipple } from "react-native-paper";


export default function Ticket() {
  return (
    <View>
      <GivenpointTable />
    </View>
  );
}
