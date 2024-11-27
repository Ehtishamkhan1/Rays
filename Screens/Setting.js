import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Switch } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal"
import { ThemeContext } from "../Context/ThemeContext";

export default function Setting() {
  const navigation=useNavigation()
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const {theme} = useContext(ThemeContext);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: theme.background,
        }}
      >
        <View
          style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <FontAwesome name="power-off" size={24} color= {theme.text} />
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
              Access On/Off
            </Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="#F3AF30"
          />
        </View>

         <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>navigation.navigate("Pending")} >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={ theme.text }/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
              Sent Pending
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={ theme.text} />
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={ theme.text }/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
              System On/Off
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={ theme.text} />
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={ theme.text }/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
              Raffle Drawing
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={ theme.text} />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={ theme.text }/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
              BLK Machines
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={ theme.text} />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={theme.text}/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
              Visotor On/Off
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.text} />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={theme.text}/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
             Report
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.text} />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={theme.text}/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" ,color: theme.text}}>
             Raffles
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.text} />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={theme.text}/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
            Pulls
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.text} />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={theme.text}/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" ,color: theme.text}}>
              Tag
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.text} />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: theme.background,
            width: "90%",
            height: 60,
            marginTop: 20,
            elevation: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: theme.background == "black" ? 1 : 0,
            borderColor: "white",
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color={theme.text}/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold",color: theme.text }}>
              Extra Picture
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.text} />
        </TouchableOpacity>

     {/* Modal  */}
        <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor="black"
        backdropOpacity={0.7}
        swipeDirection="down"
        onBackdropPress={()=>setModalVisible(!isModalVisible)}
        onSwipeComplete={()=>setModalVisible(!isModalVisible)}
        style={{ justifyContent: "flex-end", margin: 0 }}
      > 
      <View style={{backgroundColor:"white",height:"90%",width:"100%"}} >
        <Text>hi</Text>
      </View>
      </Modal>

      </View>
    </ScrollView>
  );
}
