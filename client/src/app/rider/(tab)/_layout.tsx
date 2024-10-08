import React from "react";
import { Tabs } from "expo-router";
import { Disc, File, Home, Search, UserCircle } from "lucide-react-native";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#179151",
        },
        headerTintColor: "white",
        tabBarLabel: () => null,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          marginHorizontal: 16,
          marginBottom: 12,
          height: 64,
          borderRadius: 100,
          shadowOpacity: 0,
          elevation: 0,
          backgroundColor: "#eeeeee",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: (props) => (
            <Home color={props.focused ? "black" : props.color} />
          ),
        }}
      />

      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
          tabBarIcon: (props) => (
            <File color={props.focused ? "black" : props.color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: (props) => (
            <UserCircle color={props.focused ? "black" : props.color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
