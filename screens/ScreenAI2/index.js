import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{
        uri: "https://cdn.britannica.com/47/201647-050-C547C128/Hugh-Jackman-2013.jpg"
      }} />
        <Text style={styles.name}>{"Robert So"}</Text>
        <Text style={styles.job}>Programmer</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.info}>{"Email: rob-codes-allday@gmail"}</Text>
          <Text style={styles.info}>{"Phone: +1 123 456 70"}</Text>
          
        </View>
      </View>
    <Text style={styles.ZXJDVyPK}>Lorem ipsum…</Text></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 80
  },
  job: {
    fontSize: 18,
    color: "#FFFFFF",
    alignSelf: "center"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  info: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    position: "relative"
  },
  ZXJDVyPK: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ProfileScreen;