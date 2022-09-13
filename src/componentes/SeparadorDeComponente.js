import React from "react";
import { View } from "react-native";

const SeparadorDeComponentes = ({ height, width }) => {
    return <View style={{ width, height}} />;
};

SeparadorDeComponentes.defaultProps = {
    height: 0,
    width: 0,
};

export default SeparadorDeComponentes;