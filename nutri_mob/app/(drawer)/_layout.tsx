import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";


export default function DrawerLayout() {
  return( 
    <Drawer >
      <Drawer.Screen name="(tabs)" options={{title:"My Dashboard",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
      <Drawer.Screen name="item1" options={{title:"item 1",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
      <Drawer.Screen name="item2" options={{title:"item 2",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
      <Drawer.Screen name="item3" options={{title:"items 3",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
      <Drawer.Screen name="item4" options={{title:"item 4",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
      <Drawer.Screen name="item5" options={{title:"item 5",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
      <Drawer.Screen name="item6" options={{title:"item 6",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
      <Drawer.Screen name="about" options={{title:"About Us",drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )}}/>
    </Drawer>
  );
}
