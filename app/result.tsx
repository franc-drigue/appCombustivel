import { 
  View, 
  Text,
  StyleSheet,
  Image
} from 'react-native';
import React from 'react';
import {Link} from "expo-router";


export default function result() {
  return (
    <View style={styles.container}>
         <Image
            source={require("../assets/bombador.png")}
            resizeMode="contain"
            style={styles.image}       
          />
         <Text style={styles.title}>Compensa usar Álcool</Text>
         <Text style={styles.subTitle}>Com os preços:</Text>
         <Text style={styles.textValue}>Álcool: R$ 4.60</Text>
         <Text style={styles.textValue}>Gasolina: R$ 7.80</Text>

         <Link href={"/"} style={styles.button}>
           Calcular novamente
         </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },

  title: {
    color: "#01AB34",
    fontSize: 22,
    fontWeight: '500'
  },

  subTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 25,
    marginBottom: 10
  },

  textValue: {
    color: "#fff",
    marginVertical: 6
  },

  button: {
    backgroundColor: "#000",
    color: "#FA3C3C",
    borderWidth: 1,
    borderColor: "#FA3C3C",
    width: "90%",
    marginTop: 30,
    padding: 10,
    borderRadius: 4,
    textAlign: "center"
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    alignSelf: "center"
 }
});
