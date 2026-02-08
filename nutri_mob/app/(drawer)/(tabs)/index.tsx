import FABGroupIcon from "@/components/FABGroupIcon";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      {/* This renders "on top" of everything else automatically */}
      <FABGroupIcon/>
    </View>
  );
}
