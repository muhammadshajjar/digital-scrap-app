import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  MapView,
  UserLocation,
  Camera,
  ShapeSource,
  LineLayer,
} from "@rnmapbox/maps";
import Mapbox from "@rnmapbox/maps";
import ColorfulCard from "@freakycoder/react-native-colorful-card";
import { COLORS } from "../../../constants/Colors";

import { getAllSchedules } from "../../../lib/firebase";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { filterTodaySchedules } from "../../../helper/utilityFunctions";

Mapbox.setAccessToken(
  "pk.eyJ1Ijoic2hhamphcjk5IiwiYSI6ImNsdDdjYTgxcDAwcTMyaW5jM2EwbWlnMWMifQ.7kv6v0DaL8tylFc71BkB3w"
);
const Map = () => {
  const [directionRoute, setDirectionRoute] = useState(null);
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gettingLocation, setGettingLocation] = useState(true);
  const currentUser = useSelector((state) => state.user.personalInfo);

  const scheduleData = {
    type: "rider",
    id: currentUser?.uid,
  };
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["schedule", currentUser?.uid],
    queryFn: () => getAllSchedules(scheduleData),
  });

  const todaySchedule = filterTodaySchedules(data);

  const coords = todaySchedule.map((schedule) => [
    schedule?.lng,
    schedule?.lat,
  ]);
  const formattedCoords = coords.map((coord) => coord.join(",")).join(";");

  useEffect(() => {
    (async () => {
      console.log("getting location...");
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log("Done!");

        setLocation([location?.coords?.longitude, location?.coords?.latitude]);
        setGettingLocation(false);
      } catch (err) {
        Alert.alert("Unable to get your starting location 😔 ");
        setGettingLocation(false);
      }
    })();
  }, []);

  const makeRouterFeature = (coords) => {
    let routerFeature = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coords,
          },
        },
      ],
    };
    return routerFeature;
  };

  const createRouerLine = async (formattedCoords) => {
    try {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${location[0]},${location[1]};${formattedCoords}?steps=true&geometries=geojson&access_token=pk.eyJ1Ijoic2hhamphcjk5IiwiYSI6ImNsdDdjYTgxcDAwcTMyaW5jM2EwbWlnMWMifQ.7kv6v0DaL8tylFc71BkB3w`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];

      setDistance((data?.distance / 1000).toFixed(2));
      setDuration((data?.duration / 3600).toFixed(2));

      const route = data.geometry.coordinates;
      if (route.length) {
        const routerFeature = makeRouterFeature([...route]);
        setDirectionRoute(routerFeature);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primaryBg }}>
      {!loading && (
        <View style={styles.card}>
          <ColorfulCard
            title="Duration"
            value={`${duration} hours`}
            footerTitle="Distance"
            footerValue={`${distance} Km`}
            iconImageSource={require("../../../assets/images/direction.png")}
            style={{ backgroundColor: COLORS.primaryGreen }}
            onPress={() => {}}
          />
        </View>
      )}
      {gettingLocation && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="small" color={COLORS.primaryGreen} />
          <Text style={styles.feedback}>Generating Optimal Pickup Route!</Text>
        </View>
      )}
      {location && (
        <MapView
          style={styles.map}
          zoomEnabled={true}
          // styleURL="mapbox://styles/mapbox/navigation-night-v1"
          rotateEnabled={true}
          onDidFinishLoadingMap={async () => {
            await createRouerLine(formattedCoords);
          }}
        >
          <Camera
            zoomLevel={15}
            centerCoordinate={location || [73.0288, 33.7156]}
            pitch={60}
            animationMode="flyTo"
            animationDuration={6000}
            // followUserLocation={true}
          />
          {directionRoute && (
            <ShapeSource id="line1" shape={directionRoute}>
              <LineLayer
                id="routerLine01"
                style={{
                  lineColor: "#42A554",
                  lineWidth: 5,
                }}
              />
            </ShapeSource>
          )}
          <UserLocation
            animated={true}
            androidRenderMode="gps"
            showsUserHeadingIndicator={true}
          />
        </MapView>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  card: {
    position: "absolute",
    top: 30,
    right: 20,
    zIndex: 1,
  },
  loadingContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "50%",
    zIndex: 2,
    backgroundColor: COLORS.primaryGreen,
    flex: 1,
  },
  feedback: {
    fontFamily: "Montserrat-Medium",
    marginTop: 10,
    fontSize: 15,
  },
});
