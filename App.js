import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "b38ca1ca5fc1a90ed48088365cf184e2";

export default class extends React.Component {
    state = {
        isLoading: true,
    };
    getWeather = async (latitude, longitude) => {
        const { data } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        console.log(data.main.temp);
        this.setState({ isLoading: false, temp: data.main.temp });
    };

    getLocation = async () => {
        try {
            // throw Error();
            await Location.requestForegroundPermissionsAsync(); //이걸로 사용자한테 위치 추적해도 되냐고 물어봄

            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync(); //coords es6에서 사용
            console.log(latitude, longitude);
            // this.getWeather(lat, long);
            this.getWeather(latitude, longitude);
            //Send to API and get weather
        } catch (error) {
            console.log(error);
            Alert.alert("can`t find", "sad");
        }
    };
    componentDidMount() {
        this.getLocation();
    }
    render() {
        const { isLoading, temp } = this.state;
        console.log(isLoading, temp);
        return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
    }
    // return <Loading />;
}

// export default function App() {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.text}>hellos</Text>
//             <Text style={styles.text}>hello</Text> */}
//             <View style={styles.yellowView}></View>
//             <View style={styles.blueView}></View>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, //부모 모든공간 사용가능하게
//         // flexDirection: "row",
//         // backgroundColor: "#fff",

//         justifyContent: "center",
//     },
//     text: {
//         color: "blue",
//     },
//     yellowView: {
//         flex: 1,
//         backgroundColor: "yellow",
//         justifyContent: "center", //세로움직
//         alignItems: "center", // 가로움직
//     },
//     blueView: {
//         flex: 1,
//         backgroundColor: "blue",
//     },
// });
