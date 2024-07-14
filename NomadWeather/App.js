import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import * as Location from "expo-location";

// 이건 원래 서버에 존재해야함
const API_KEY = "7abb9a0098b73369439dd73ccbfb3512";

// height, width
const { width: SCREEN_WIDTH } = Dimensions.get("window");
//console.log(SCREEN_WIDTH);

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    //console.log(permission);
    if (!granted) {
      setOk(false); //권한 요청 거절 - 슬픈 어굴 보여준다던지 등등
    }

    const {
      coords: { longitude, latitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    //console.log(location);
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    //console.log(location[0].city);
    setCity(location[0].city);

    const response = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    const json = (await response).json();
    console.log(json);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },

  city: {
    flex: 1.2,
    justifyContent: "center", // 높이 중앙
    alignItems: "center",
  },

  cityName: {
    color: "black",
    fontSize: 48,
    fontWeight: "500",
  },

  weather: {
    // flex: 3, 필요 없음 왜냐하면 스크린보다 커야 스크롤이 됨!
    //backgroundColor: "teal",
  },

  day: {
    //flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
  },

  temp: {
    fontSize: 128,
    marginTop: 30,
    fontWeight: "600",
  },

  description: {
    marginTop: -10,
    fontSize: 30,
  },
});
