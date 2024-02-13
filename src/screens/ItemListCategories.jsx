import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Pressable, Text } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import Header from "../components/Header";

function ItemListCategories({ category, setCategorySelected }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Header title={category}/>
      <Search onSearch={setKeyword} />
      <Pressable style={styles.pressable} onPress={()=> setCategorySelected(null)}>
        <Text style={styles.text}>🔙 Volver atras</Text>
      </Pressable>
      <FlatList style={styles.flatlist}
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist: {
    width: "90%"
  },
  pressable: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#431e0b",
  },
  text: {
    color: "#fff",
    fontFamily: "Boogaloo", 
    fontSize: 18, 
  },
});
