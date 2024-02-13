import { StyleSheet, Text, Image, Pressable, View } from "react-native";
import Card from "./Card";

const ProductItem = ({product}) => {
  return (
    <>
      <Card style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.text}>{product.title}</Text>
          <Text style={{fontSize: 25, fontFamily: "Lexend", fontWeight: 'bold'}}>${product.price}</Text>
          <Pressable style={styles.pressable}>
            <Text>🛒 Agregar al carrito</Text>
          </Pressable>
        </View>
        <Image style={{width: 100, height:100}} src={product.images[0]}></Image>
        
      </Card>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Lexend",
  },
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fee0d5",
    borderRadius: 10,
    padding: 10,
  },
  info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  pressable: {
    marginRight: 20,
    paddingVertical: 6,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#be7938',
  },
});
