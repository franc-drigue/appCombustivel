import React, {useState} from "react";
import { Link } from "expo-router";
import { 
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   Image
} from "react-native";
import { useStore } from "../store/store";




export default function Home() {

   const {
      vlrAlcool,
      vlrGasolina,
      setVlrAlcool,
      setVlrGasolina
   } = useStore();

   const [msgInput, setMsgInput] = useState<string>("");

   const validInput = () => {
      if(vlrAlcool == "" || vlrGasolina == "") {
         setMsgInput("Preencha o campo");
      }
   }

    return (
      <View style={styles.container}>
         <View style={styles.containerContent}>

         <Image
            source={require("../assets/bomba.png")}
            resizeMode="contain"
            style={styles.image}
          />

          <Text style={styles.title}>Qual a melhor opção?</Text>
          <Text style={styles.label}>Álcool (preço por litro)</Text>
            <TextInput
             value={vlrAlcool}
             style={styles.input}
             placeholder="4,60"
             onChangeText={(value) => setVlrAlcool(value)}
             keyboardType="numeric"
            />
           <Text style={{color:"#FA3C3C", fontSize: 12,  display:`${vlrAlcool.length != 0 ? "none" : msgInput.length == 0 ? "none" : "flex" }`}}>{msgInput}</Text>

          <Text style={styles.label}>Gasolina (preço por litro)</Text>
           <TextInput
             value={vlrGasolina}
             style={styles.input}
             placeholder="7,30"
             onChangeText={(value) => setVlrGasolina(value)}
             keyboardType="numeric"
            /> 
          <Text style={{color:"#FA3C3C", fontSize: 12, display:`${vlrGasolina.length != 0 ? "none" : msgInput.length == 0 ? "none" : "flex"}`}}>{msgInput}</Text>
         
         <TouchableOpacity onPress={validInput}>
         {
         vlrAlcool.length === 0 || vlrGasolina.length === 0 ? 
          <TouchableOpacity 
           onPress={validInput}
           style={styles.button}
           > 
              <Text style={{fontSize: 20, fontWeight: "700", color: "#fff"}}>Calcular</Text>
          </TouchableOpacity>
          :
          <Link 
          href={{
           pathname: "/result",
           params: {
              valorAlcool: vlrAlcool,
              valorGasolina: vlrGasolina
           }
          }}  
          style={styles.button}
          onPress={validInput}
          > 
               Calcular
         </Link>
         }

         </TouchableOpacity>
         </View>
      </View>
    )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#000"
   },

   input: {
      backgroundColor: "#fff",
      marginVertical: 5,
      borderRadius: 4,
      paddingHorizontal: 10
   },

   containerContent: {
      padding: 15,
      justifyContent: 'center',
      flex: 1
   },

   label: {
      marginTop: 10,
      color: "#fff"
   },

   button: {
      backgroundColor: "#FA3C3C",
      marginVertical:10,
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "700"
   },

   title: {
      fontSize: 27,
      fontWeight: "bold",
      color: "#fff",
      alignSelf: "center",
      marginBottom: 40
   },

   image: {
      width: 200,
      height: 200,
      marginBottom: 30,
      alignSelf: "center"
   }
});

