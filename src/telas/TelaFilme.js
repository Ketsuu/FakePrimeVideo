import React from "react";
import { StatusBar } from "expo-status-bar";
import { StatusBar, View } from "react-native"

import COR from "../constantes/Cores"
import IMAGEM from "../constantes/Imagens"
const TelaFilme = () =>{
    return(
    <View style={estilo.tela}>
        <StatusBar style="auto" />
        <Text styçe={estilo.titulo}>Tela de Filmes</Text>
    </View>
    );
};




const estilo = StyleSheet.create({
tela:{
    flex:1,
    justifyContent:'center',
},
titulo:{

},

});

export default TelaFilme;