import * as React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const openDetails = () => navigation.navigate("Details");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button title="Open Details" onPress={openDetails} />
    </View>
  );
};

export default HomeScreen;
