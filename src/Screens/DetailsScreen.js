import * as React from "react";
import { Button, Text, View } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const { count } = route.params;

  const openDetails = () =>
    navigation.navigate("Details", { count: count + 1 });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>DetailsScreen</Text>
      <Text>{count}</Text>
      <Button title="Open Details" onPress={openDetails} />
    </View>
  );
};

export default DetailsScreen;
