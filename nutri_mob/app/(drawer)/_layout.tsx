import { Drawer } from "expo-router/drawer";


export default function RootLayout() {
  return( 
    <Drawer screenOptions={{headerShown:false}}>
      <Drawer.Screen name="about" options={{title:"About Us"}}/>
    </Drawer>
  );
}
