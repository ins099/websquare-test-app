import { StyleSheet } from "react-native";
import React from "react";
import * as Notification from "expo-notifications";

// Enables Foreground Notification
Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

const LocalNotification = (props) => {
  //  Notification Handler
  const handleNotifications = () => {
    // local notification function
    Notification.scheduleNotificationAsync({
      content: {
        title: `Hi, ${props?.User?.username}`,
        body: `Your Email is ${props?.User?.email}`,
      },
      // trigger after given time
      trigger: {
        seconds: 1,
      },
    });
  };

  handleNotifications();
};

export default LocalNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
