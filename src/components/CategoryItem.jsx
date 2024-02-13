import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Card style={{ marginVertical: 10 }}>
      <Pressable onPress={() => setCategorySelected(category)}>
        <Text style={styles.text}>🔸{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    color: "431e0b",
    fontSize: 20,
    textTransform: "capitalize",
    fontFamily: "Lexend",
  },
});
