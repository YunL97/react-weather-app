import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Weather({ temp }) {
    console.log("aa" + temp);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{temp}</Text>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c2c2c",
    },
    text: {
        color: "#fff",
    },
});
