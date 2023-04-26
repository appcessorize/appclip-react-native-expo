import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { isClip } from "react-native-app-clip";
export default function App() {
  //isClip() returns true if the app is running inside an AppClip
  let clipOrNot = isClip();

  return (
    <View style={styles.container}>
      {clipOrNot ? (
        <Text>This is an AppClip</Text>
      ) : (
        <Text>This is not an AppClip. It's a regular app</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
