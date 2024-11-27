import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Switch } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal"

export default function Setting() {
  const navigation=useNavigation()
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
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
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <FontAwesome name="power-off" size={24} color= {isSwitchOn? "red" : "black"} />
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
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
            backgroundColor: "white",
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
          }}  onPress={()=>navigation.navigate("Pending")} >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
              Sent Pending
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
              System On/Off
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
              Raffle Drawing
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
              BLK Machines
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
              Visotor On/Off
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
             Report
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
             Raffles
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
            Pulls
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
              Tag
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor: "white",
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
          }}  onPress={()=>setModalVisible(!isModalVisible) } >
       
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="pending-actions" size={24} color="black"/>
            <Text style={{ width: 120, fontSize: 15, fontWeight: "bold" }}>
              Extra Picture
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
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
