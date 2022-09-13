import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
} from "react-native";

//Importar o arquivo de configuraçoes de cores

import COR from "../constantes/Cores";

//Criando constantes que armazenam as dimensões da tela do dispositivo
const { width } = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;
const GeneroBotao = ({nomeGenero, ativo, botaoPressionado}) => {
    return (
        <TouchableOpacity
        style={{
            ...estilo.tela,
            backgroundColor: ativo ? COR.ATIVO : COR.BRANCO,
            }}
            onPress={() => botaoPressionado(nomeGenero)}
            >
            <Text 
            style={{
                ...estilo.GeneroTexto,
                color: ativo ? COR.BRANCO : COR.ATIVO,
                }}
                >
                {nomeGenero}
            </Text>
        </TouchableOpacity>
    );
};

export default GeneroBotao;

const estilo = StyleSheet.create({
    tela: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: COR.BRANCO,

        elevation: 3,
        marginVertical: 2,
        width: setWidth(25),
    },
    GeneroTexto: {
        fontSize: 13,
        color: COR.ATIVO,
    },
});