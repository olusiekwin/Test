import React from "react";
import { Tabs } from "expo-router";
import { Home, Salad, Trophy, User } from "lucide-react-native";

import Colors from "@/constants/colors";
import { tabBarStyles } from "@/styles/tabBar.styles";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#202026",
        tabBarInactiveTintColor: "#B5B5B5",
        headerShown: false,
        tabBarStyle: tabBarStyles.tabBar,
        tabBarItemStyle: tabBarStyles.tabBarItem,
        tabBarLabelStyle: tabBarStyles.tabBarLabel,
        tabBarShowLabel: false, // Hide labels for icon-only navigation
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="planner"
        options={{
          title: "Food Planner",
          tabBarIcon: ({ color }) => <Salad size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="challenge"
        options={{
          title: "Cooking Challenge",
          tabBarIcon: ({ color }) => <Trophy size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="ai-chat"
        options={{
          title: "AI Chat",
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="recipe-details"
        options={{
          title: "Recipe Details",
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="recipe-options"
        options={{
          title: "Recipe Options",
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          tabBarItemStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}