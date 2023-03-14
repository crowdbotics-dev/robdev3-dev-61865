import { FlatList } from "react-native";
import { CheckBox } from "react-native-elements";
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
      <CheckBox style={styles.eiGPdcTL} title="Checkbox Title" checked="false"></CheckBox><FlatList style={styles.RTtOpwWf} renderItem={({
        item
      }) => <View style={styles.Omrmwcug}></View>} ItemSeparatorComponent={() => <View style={styles.rwgWmIJe} />} data={[1, 2, 3]} keyExtractor={(item, index) => index} horizontal={true} ListHeaderComponent={() => <Text>My list header</Text>} ListFooterComponent={() => <Text>My list footer</Text>}></FlatList></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}></Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#e5c9c9"
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
    fontSize: 17,
    textAlign: "justify",
    lineHeight: 18,
    marginVertical: 10,
    letterSpacing: 3
  },
  eiGPdcTL: {
    width: 183,
    height: 69
  },
  RTtOpwWf: {
    position: "absolute",
    width: 100,
    height: 150
  },
  Omrmwcug: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  rwgWmIJe: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default AboutTheAppScreen;