import useHeaderTitle from "@/hooks/ShowHeaderTitle";
import { Text, View } from "react-native";

export default function Daily() {
    //Run the change of the header title
    useHeaderTitle("Daily Routen");

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Daily intakes page displayed now </Text>
      </View>
    </>
  );
}
