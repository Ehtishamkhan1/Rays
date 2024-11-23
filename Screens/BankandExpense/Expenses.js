import {
    View,
    Text,
    ImageBackground,
    TextInput,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import React from "react";
import Back from "../../assets/Back.png";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import ExpensesTable from "../../Components/ExpensesTable";
import { TouchableRipple } from "react-native-paper";

export default function Expenses() {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <View
                style={{
                    height: 300,
                    padding: 10,
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                }}
            >
                {/* <View
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              paddingTop: 20,
              borderRadius: 10,
              borderWidth: 0.1,
              backgroundColor: 'rgba(107, 106, 106, 0.5)',
              borderBlockColor: "white",
              borderRightColor: "white",
              borderLeftColor: "white",
              
            }}
          > */}
                <LinearGradient
                    colors={[
                        "rgba(5,2,2,0.8)",    // 80% opacity
                        "rgba(188,30,45,0.9)", // 60% opacity
                        "rgba(218,165,32,0.7)" // 40% opacity
                    ]}
                    start={{ x: 0.5, y: 0 }}
                    // End at the bottom
                    end={{ x: 0.5, y: 1 }}
                    style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        paddingTop: 45,
                        borderRadius: 10,
                        borderBlockColor: "white",
                        borderRightColor: "white",
                        borderLeftColor: "white",
                        boxShadow: '5px 10px 8px rgba(0, 0, 0, 0.2)'
                    }}
                >


                    {/* <View style={{display:"flex",alignItems:"center",flexDirection:"row",gap:5}} >
             <Text style={{fontSize:20,fontWeight:"bold",color:"white"}} >Machine</Text>
             <TouchableOpacity style={{width:50,display:"flex",alignItems:"center",justifyContent:"center"}} >
             <Entypo name="circle-with-plus" size={24} color="white" />
             </TouchableOpacity>
             <TextInput placeholder='Machine' style={{width:150,borderWidth:1,borderColor:"white",color:"white"}}  placeholderTextColor={"white"} />
              <View>
             <TouchableOpacity style={{width:50,display:"flex",alignItems:"center",justifyContent:"center"}} >
             <Entypo name="circle-with-minus" size={24} color="white" />
             </TouchableOpacity>
             </View>
           </View> */}

                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            gap: 10,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                        >
                            Amount
                        </Text>

                        {/* Container for the TextInput and icons */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                borderWidth: 0.5,
                                borderColor: "white",
                                borderRadius: 10,
                                position: "relative",
                                width: 200, // Adjust width according to your needs
                            }}
                        >
                            {/* Left icon inside the TextInput */}


                            {/* The TextInput itself */}
                            <TextInput
                                placeholder="Amount"
                                style={{
                                    flex: 1,
                                    color: "white",
                                    paddingLeft: 10,
                                    paddingRight: 30, // Add space for the right icon
                                    fontSize: 16,
                                    height: 40,
                                }}
                                placeholderTextColor="white"
                                keyboardType="numeric"
                            />


                        </View>
                    </View>

                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            gap: 10,
                            marginTop: 20,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                        >
                            Description
                        </Text>

                        {/* Container for the TextInput and icons */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                borderWidth: 0.5,
                                borderColor: "white",
                                borderRadius: 10,
                                position: "relative",
                                width: 160,
                                left: 2.5
                            }}
                        >
                            {/* The TextInput itself */}
                            <TextInput
                                placeholder=""
                                style={{
                                    flex: 1,
                                    color: "white",
                                    paddingLeft: 10,
                                    paddingRight: 30,
                                    fontSize: 16,
                                    height: 80,
                                    position: "relative",
                                    textAlignVertical: "top",
                                }}
                                placeholderTextColor="white"
                                multiline={true}
                                numberOfLines={4}
                                onPressOut={() => Keyboard.dismiss()}
                            />

                        </View>

                    </View>

                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            gap: 20,
                            marginTop: 20,
                            width: "80%",
                            justifyContent: "flex-end",
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
                                boxShadow: "5px 5px 8px rgba(212, 0, 0, 0.2)",
                            }}
                        >
                            <Text
                                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                            >
                                Add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>

            <View style={{ marginTop: 20, boxShadow: '5px 10px 8px rgba(0, 0, 0, 0.4)',flex:1}} >
                    <ExpensesTable />
            </View>
        </View>
    );
}