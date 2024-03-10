import { StyleSheet, View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";

import { useIsFocused } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { changeProgress, setFormData } from "../../../store/redux/sellingSlice";

import SellingFromStepsBtn from "../../../components/ui/SellingFormStepsBtn";

import { COLORS } from "../../../constants/Colors";

import { router } from "expo-router";
import { MapView, UserLocation, Camera, PointAnnotation } from "@rnmapbox/maps";
import Mapbox from "@rnmapbox/maps";

import { FontAwesome5 } from "@expo/vector-icons";

Mapbox.setAccessToken(
  "pk.eyJ1Ijoic2hhamphcjk5IiwiYSI6ImNsdDdjYTgxcDAwcTMyaW5jM2EwbWlnMWMifQ.7kv6v0DaL8tylFc71BkB3w"
);

const Step2 = () => {
  const [viewPort, setViewPort] = useState(null);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    isFocused && dispatch(changeProgress(2));
  }, [isFocused]);

  const handleSubmit = () => {
    if (viewPort) {
      dispatch(setFormData({ lat: viewPort?.lat, lng: viewPort?.lng }));
      router.push("/customers/selling/step3");
    } else {
      Alert.alert(
        "Can't Find exact location",
        "Please use marker to pin your exact location"
      );
    }
  };

  const dragMarkerHandler = (e) => {
    console.log(e?.geometry?.coordinates);
    const [lat, lng] = e?.geometry?.coordinates;
    setViewPort({
      lat,
      lng,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drop pin at exact location 📍</Text>
      <View style={{ height: "80%", width: "100%" }}>
        <MapView
          style={styles.map}
          setAccessToken="pk.eyJ1Ijoic2hhamphcjk5IiwiYSI6ImNsdDdjYTgxcDAwcTMyaW5jM2EwbWlnMWMifQ.7kv6v0DaL8tylFc71BkB3w"
        >
          <Camera
            zoomLevel={15}
            centerCoordinate={[73.0288, 33.7156]}
            pitch={60}
            animationMode="flyTo"
            animationDuration={6000}
            // followUserLocation={true}
          />

          <PointAnnotation
            id="marker"
            coordinate={[73.0288, 33.7156]}
            draggable={true}
            onDragEnd={dragMarkerHandler}
          >
            <View>
              <FontAwesome5
                name="map-marker-alt"
                size={30}
                color={COLORS.primaryGreen}
              />
            </View>
          </PointAnnotation>
          <UserLocation />
        </MapView>
      </View>
      <SellingFromStepsBtn
        bPath="/customers/selling/form"
        onSubmitCallback={handleSubmit}
      />
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "white",
    flex: 1,
  },
  formContainer: {
    marginTop: 30,
    flex: 1,
    padding: 7,
  },

  labelTxt: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    marginTop: 20,
    marginBottom: 12,
  },
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pickerField: {
    padding: 15,
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    backgroundColor: COLORS.lightGreyBg,
    borderRadius: 4,
    width: "100%",
  },
  feedbackTxt: {
    marginTop: 5,
    color: "red",
  },
  map: {
    flex: 1,
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
});
