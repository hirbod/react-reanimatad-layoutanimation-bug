import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        This is the first tab. Please click at the top INFO Icon, to open a
        Modal with a video. After you've verified it is running, close it with a
        swipe down gesture.
      </Text>
      <Text style={styles.title}>
        You have verified, that the RAM has been released and the video stopped.
        Now go to Tab 2 and return back to Tab 1. On Tab 2 we will render a
        `View` which uses `layout` by React Native Reanimated. Now please open
        the video again. This time, it won't stop after you've closed it.
      </Text>
      <Text style={styles.title}>
        It doesn't matter if it is a modal or a normal screen that gets pushed
        into the stack. When you close the modal, the video just stops playing.
        Same issue applies to anything that gets rendered, it will report it has
        been removed but it will actually never be removed. Also Cameras will
        keep showing the green light indicator
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    marginTop: 30,
    textAlign: "center",
    color: "white",
  },
});
