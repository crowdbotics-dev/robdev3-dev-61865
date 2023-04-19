import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.qqJezCab} source={{
        uri: "https://s3.amazonaws.com/gs-geo-images/d766f76f-8bdc-4fc2-80ed-b3ac5f00385b.png"
      }} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  qqJezCab: {
    width: 338,
    height: 336
  }
});
export default Untitled4;