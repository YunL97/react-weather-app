import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
    },
    Clouds: {
        iconName: "apple-icloud",
        gradient: ["#1c92d2", "#f2fcfe"],
    },
};

export default function Weather({ temp, condition }) {
    console.log("aa" + temp);
    console.log("bb" + condition);
    return (
        <LinearGradient
            // Background Linear Gradient
            // colors={["rgba(0,0,0,0.8)", "transparent"]} //이거는 상위View에 백그라운드 컬러있을때 사용
            // style={styles.background}
            // colors={[weatherOptions.[condition].gradient[0],weatherOptions.[condition].gradient[1] ]}
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={86}
                    name={weatherOptions[condition].iconName}
                    color="white"
                ></MaterialCommunityIcons>
                <Text style={styles.text}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={{ ...styles.title, ...styles.title1 }}>Title</Text>
                <Text>Subtitle</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    // condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
    },
    text: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "bold",
    },
    title1: {
        marginBottom: 10,
    },
});
