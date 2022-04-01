import { StyleSheet, Text } from "react-native";

import Reanimated, { Layout } from "react-native-reanimated";

export default function TabTwoScreen() {
  return (
    <Reanimated.View style={styles.container} layout={Layout}>
      <Text style={styles.title}>
        This screen has nothing special but that the `View` you're reading this
        text has `layout` on it. It also break with `entering` and `exiting`.
      </Text>
      <Text style={styles.title}>
        Please return back to Tab 1 and open the modal. I just want to
        demonstrate that a single mount of a Reanimated.View with `layout`
        breaks the whole deallocation of any View, specially Video and Camera.
        You can remove `layout` from that View and reload the app (fast
        reloading is not enough). You will see that you will now be able to open
        and close the modal as often you like without breaking
      </Text>
    </Reanimated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    marginTop: 15,
    textAlign: "center",
    color: "white",
  },
});
