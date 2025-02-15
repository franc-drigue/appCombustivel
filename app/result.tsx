import { 
  View, 
  Text,
  StyleSheet,
  Image
} from 'react-native';
import React from 'react';
import {Link} from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import { useStore } from "../store/store";

type Params = {
  valorAlcool: string
  valorGasolina: string
}

export default function result() {

  const {
    setVlrAlcool,
    setVlrGasolina
  } = useStore()
  const router:Params = useLocalSearchParams();

  let calc = parseFloat(router.valorAlcool) / parseFloat(router.valorGasolina)

  return (
    <View style={styles.container}>
         <Image
            source={require("../assets/bombador.png")}
            resizeMode="contain"
            style={styles.image}       
          />
         <Text style={styles.title}>{calc < 0.7 ? "Compensa usar Álcool" : "Compensa usar Gasolina"}</Text>
         <Text style={styles.subTitle}>Com os preços:</Text>
         <Text style={styles.textValue}>Álcool: R$ {parseFloat(router.valorAlcool).toFixed(2).replace(".", ",")}</Text>
         <Text style={styles.textValue}>Gasolina: R$ {parseFloat(router.valorGasolina).toFixed(2).replace(".", ",")}</Text>

         <Link href={"/"} style={styles.button} onPress={() => {
          setVlrAlcool("");
          setVlrGasolina("");
         }}>
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
