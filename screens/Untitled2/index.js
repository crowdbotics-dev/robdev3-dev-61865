import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.NGFqHbAC}><ImageBackground style={styles.uzwkVMmz} source={require("./With getReduxActions.jpg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  uzwkVMmz: {
    width: 107,
    height: 62
  },
  NGFqHbAC: {
    borderRadius: 50
  }
});
export default Untitled2;