import useHeaderTitle from "@/hooks/ShowHeaderTitle";
import { Text, View } from "react-native";

export default function Plans() {
    //Display the header title
    useHeaderTitle("My Plans")
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>My Plans page displayed now </Text>
      </View>
    </>
  );
}
