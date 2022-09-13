import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    SafeAreaView,
} from "react-native"

import React, {usaState, useEffect} from "react";

//Importar o arquivo de configuraçoes de cores
import GeneroBotao from "../componentes/GeneroBotao";
import SeparadorDeComponentes from "../componentes/SeparadorDeComponente";
import COR from "../constantes/Cores"
import IMAGEM from "../constantes/Imagens"

const Generos = ["Todos", "Ação","Comédia","Romance","Horror","Ficção"]


const TelaPrincipal = () =>{

    //Constante para controlar qual botão de genero esta ativo no momento
    const [botaoAtivo, setBotaoAtivo] = useState("Todos");
    return(
        <SafeAreaView style={estilo.tela}>
            <ScrollView vertical={true}>
                <StatusBar
                style="auto"
                translucent={false}
                backgroundColor={COR.FUNDO_BASICO}
                />
                <View style={estilo.cabecalhoTela}>
                    <Text style={estilo.cabecalhoTitulo}>POPULARES</Text>
                    <Text style={estilo.cabecalhoSubTitulo}>TODOS</Text>
                </View>
                <View style={estilo.listaGeneros}>
                    {/* Inicio da lista (flatlist) de Generos em forma de botoes */}
                    <FlatList
                    data={Generos}
                    horizontal
                    keyExtractor={(Item) => item}
                    ItemSeparatorComponent={() => <SeparadorDeComponentes width={20}/>}
                    ListHeaderComponent={() => <SeparadorDeComponentes width={20}/>}
                    ListFooterComponent={() => <SeparadorDeComponentes width={20}/>}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                    <GeneroBotao
                    nomeGenero={item}
                    ativo={item === botaoAtivo ? true : false}
                    botaoPressionado={setBotaoAtivo}
                    />)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};




const estilo = StyleSheet.create({
tela:{
    flex:1,
    backgroundColor: COR.FUNDO_BASICO,
},
cabecalhoTela: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
},
cabecalhoTitulo: {
    fontSize: 28,
},
cabecalhoSubTitulo: {
    fontSize: 13,
    color: COR.ATIVO,
},
listaGeneros:{
    paddingVertical: 10,
},
});

export default TelaPrincipal;