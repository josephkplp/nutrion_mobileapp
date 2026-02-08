
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return( 
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name="index" options={{title:"Home",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),}}/>
        <Tabs.Screen name="daily" options={{title:"Daily",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),}}/>
        <Tabs.Screen name="plans" options={{title:"My Plans",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),}}/>
        <Tabs.Screen name="reports" options={{title:"Reports",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),}}/>
    </Tabs>
  );
}
