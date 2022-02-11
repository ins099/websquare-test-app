import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import LocalNotification from "./LocalNotification";
import { useSelector } from "react-redux";
import { NativeBaseProvider } from "native-base";

const QrCodeComponent = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const {setScan, User} = props  


  // get permission for camera
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  });

  // barcode succes function
  const handleBarCodeScanned = ({ type, data }) => {
    LocalNotification({ User: User }) 
    setScan()
    console.log("SCAANDED")
  };

//  camera request is pending 
  if (hasPermission === null) {
    return (
    
    <NativeBaseProvider>
        <View style = {{justifyContent:'center', height:'100%',alignItems:'center', width:'100%'}}>
          <View style={{ width:'80%',justifyContent:'center'}}>
              <Text style = {styles.text}>Waiting for camera request approval</Text>
          </View>
        </View>
      </NativeBaseProvider>

        )
  }

  // camera request is denied
  if (hasPermission === false) {
    return (
    
        <NativeBaseProvider>
        <View style = {{justifyContent:'center', height:'100%',alignItems:'center', width:'100%'}}>
          <View style={{ width:'80%',justifyContent:'center'}}>
              <Text style = {styles.text}>Request Denied</Text>
          </View>
        </View>
      </NativeBaseProvider>

        )
  }

  return (
      <View style={{ height: "100%", width: "100%" }}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
  );
};

export default QrCodeComponent;

const styles = StyleSheet.create({
  button: { position: "absolute", bottom: 20, alignSelf: "center" },
  text:{
      fontSize:30
  }
});
