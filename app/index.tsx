import React from "react";
import { Link } from "expo-router";
import { 
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity
} from "react-native";


export default function Home() {
    return (
      <View style={styles.container}>
         <View style={styles.containerContent}>
          <Text style={styles.title}>Qual a melhor opção?</Text>
          <Text style={styles.label}>Álcool (preço por litro)</Text>
            <TextInput
             style={styles.input}
             placeholder="4.60"
            />
          
          <Text style={styles.label}>Gasolina (preço por litro)</Text>
          <TextInput
             style={styles.input}
             placeholder="7.30"
            />  
         
           <TouchableOpacity style={styles.button}>
             <Text style={styles.textButton}>
                Calcular
             </Text>
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
      paddingVertical: 10
   },

   textButton: {
      fontSize: 18,
      fontWeight: "700",
      color: "#fff"
   },

   title: {
      fontSize: 27,
      fontWeight: "bold",
      color: "#fff",
      alignSelf: "center",
      marginBottom: 40
   }
})

