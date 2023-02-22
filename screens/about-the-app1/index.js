import { ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";

const AboutTheAppScreen = params => {
  const [ImageSource, setImageSource] = useState();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    setText1("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setText2("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setImageSource(require("./assets/Frame21.png"));
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}>
        <Image source={ImageSource} />
        <Image style={styles.threeDots} source={require("./assets/3Dots.png")} />
      </View>
      <View style={styles.textContainer}>
        
        
      </View>
    <ImageBackground style={styles.RCQbBwYx} source={require("./Profile Pic.JPG")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.tESzIbdy} source={require("./Robert-so-foraging.jpg")} resizeMode="cover"></ImageBackground><Text style={styles.gSHIczkM}>This is me oyster foraging</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
  },
  textContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 18,
    marginVertical: 10,
    position: "relative",
    flexDirection: "column",
    flex: "1",
    flexWrap: "no-wrap"
  },
  RCQbBwYx: {
    width: 107,
    height: 62,
    top: -42,
    left: 5
  },
  tESzIbdy: {
    width: 108,
    height: 105,
    position: "absolute",
    left: 15,
    top: 10
  },
  gSHIczkM: {
    width: 358,
    height: 192,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    fontFamily: "Nunito"
  }
});
export default AboutTheAppScreen;