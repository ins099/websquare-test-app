import { StyleSheet, Text, Button, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import QrCodeComponent from "../Components/QrCodeComponent";
import { NativeBaseProvider } from "native-base";

const QrCode = () => {
  // get user detail from state
  const { User } = useSelector((state) => ({
    User: state?.authenticateUser,
  }));

  // check scan status
  const [scan, setScan] = useState(false);

  if (scan) {
    return <QrCodeComponent User={User} setScan={() => setScan(!scan)} />;
  } else {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={styles.qrCode}>QR CODE SCANNER</Text>
            <Button title="Scan" onPress={() => setScan(true)} />
          </View>
        </View>
      </NativeBaseProvider>
    );
  }
};

export default QrCode;

const styles = StyleSheet.create({
  qrCode: {
    fontWeight: "bold",
    fontSize: 35,
  },
  container: {
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    width: "100%",
  },
});
