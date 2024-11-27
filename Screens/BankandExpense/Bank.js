import {
    View,
    Text,
    ImageBackground,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback, ScrollView, RefreshControl
} from "react-native";
import React, { useState, useCallback, useEffect, useRef } from "react";
import Back from "../../assets/Back.png";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import ExpensesTable from "../../Components/ExpensesTable";
import { TouchableRipple } from "react-native-paper";
import { TextInput } from "react-native-paper";


export default function Bank() {
    const [text, setText] = useState('');
    const [desText, setdesText] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const myInputRef = useRef(null);



    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // Simulate a network request or data refresh
        setTimeout(() => {
          setRefreshing(false);
          // Refresh logic here (e.g., fetch data again)
        }, 2000); // Example: 2 seconds delay for refresh
      }, []);

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
                {/* <LinearGradient
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
                > */}
                <ScrollView 
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                >
                    <View
                        style={{
                            height: "105%",
                            display: "flex",
                            alignItems: "center",
                            paddingTop: 45,
                            borderRadius: 10,
                            borderColor: "#F3AF30",
                            borderWidth: 2,
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
                            {/* Container for the TextInput and icons */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    position: "relative",
                                    width: 300,
                                    marginTop: -20
                                }}
                            >
                                {/* The TextInput itself */}
                                <TextInput
                                    label="Amount"
                                    value={text}
                                    onChangeText={setText}
                                    style={{
                                        flex: 1,
                                        paddingLeft: 0,
                                        paddingRight: 30,
                                        fontSize: 20,
                                        height: 40,
                                        backgroundColor: "transparent",
                                    }}
                                    theme={{
                                        colors: {
                                            onSurfaceVariant: 'black', primary: '#F3AF30', onSurface: 'black'
                                        },
                                    }}
                                    mode="outlined"
                                    keyboardType="numeric"
                                    returnKeyType="done"
                                    onPress={Keyboard.dismiss}
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
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    position: "relative",
                                    width: 300,
                                    left: 2.5,

                                }}
                            >
                                <TouchableOpacity
                                style={{flex: 1}}
                                onPress={() => {myInputRef.current.focus()}}>
                                <TextInput
                                    label="Description"
                                    value={desText}
                                    onChangeText={setdesText}
                                    ref={myInputRef}
                                    onFocus={() => setIsInputFocused(true)}
                                    onBlur={() => setIsInputFocused(false)}
                                    style={{
                                        flex: 1,
                                        fontSize: 16,
                                        paddingBottom: isInputFocused ? 0 : 30,
                                        position: "relative",
                                        backgroundColor: "transparent",
                                        textAlignVertical: "top",
                                        textAlign: "left",
                                    }}
                                    theme={{
                                        colors: {
                                            onSurfaceVariant: 'black', primary: '#F3AF30', onSurface: 'black'
                                        },
                                    }}
                                    mode="outlined"
                                    multiline={true}
                                    onPressOut={() => Keyboard.dismiss()}
                                />
                                </TouchableOpacity>

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
                                    width: 270,
                                    height: 40,
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
                    </View>
                </ScrollView>
                {/* </LinearGradient> */}
            </View>

            <View style={{ marginTop: 20, boxShadow: '5px 10px 8px rgba(0, 0, 0, 0.4)', flex: 1 }} >
                <ExpensesTable />
            </View>
        </View>
    );
}