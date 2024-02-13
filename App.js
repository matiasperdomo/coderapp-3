import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import { fonts } from "./src/global/fonts";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Boogaloo: require("./assets/fonts/Boogaloo-Regular.ttf"),
    Lexend: require("./assets/fonts/Lexend-VariableFont_wght.ttf")
  });

  const [categorySelected, setCategorySelected] = useState(null);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {categorySelected ? (
        <ItemListCategories 
          category={categorySelected}
          setCategorySelected={setCategorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#be7938",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
