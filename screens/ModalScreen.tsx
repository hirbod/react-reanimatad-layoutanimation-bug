import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View, Text } from "react-native";

import { Video } from "expo-av";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Wait until music starts playing and close
      </Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <Video
        shouldPlay={true}
        style={{ width: 500, height: 200 }}
        source={{
          uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
