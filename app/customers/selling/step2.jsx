import { StyleSheet, View, Text, Alert, TextInput } from "react-native";
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

import { getRiderBasedOnAreaAssigned } from "../../../lib/firebase";

const MAP_BOX_ACCESS_KEY =
  "pk.eyJ1Ijoic2hhamphcjk5IiwiYSI6ImNsdDdjYTgxcDAwcTMyaW5jM2EwbWlnMWMifQ.7kv6v0DaL8tylFc71BkB3w";

Mapbox.setAccessToken(MAP_BOX_ACCESS_KEY);

const Step2 = () => {
  const [viewPort, setViewPort] = useState({ lng: "73.0288", lat: "33.7156" });
  const [address, setAdress] = useState("");
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    isFocused && dispatch(changeProgress(2));
  }, [isFocused]);

  useEffect(() => {
    if (viewPort) {
      const { lng, lat } = viewPort;
      reverseGeoCoding(lng, lat)
        .then((data) => setAdress(data?.features[0]?.place_name))
        .catch((err) => {
          Alert.alert(err)
        });
    }
  }, [viewPort]);

  const handleSubmit = async () => {
    try {
      if (viewPort && address) {
        const result = await getRiderBasedOnAreaAssigned([
          viewPort?.lng,
          viewPort?.lat,
        ]);

        if (result) {
          dispatch(
            setFormData({
              lat: viewPort?.lat,
              lng: viewPort?.lng,
              address,
              riderId: result?.id,
            })
          );
          router.push("/customers/selling/step3");
        } else {
          Alert.alert(
            "Sorry 😔",
            "We are currently not available at your area"
          );
        }
      } else {
        Alert.alert(
          "Can't Find location or address",
          "Please use marker to pin your exact location and type your address below"
        );
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const dragMarkerHandler = async (e) => {
    const [lng, lat] = e?.geometry?.coordinates;
    setViewPort({
      lng,
      lat,
    });
  };

  const reverseGeoCoding = async (lng, lat) => {
    try {
      const query = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAP_BOX_ACCESS_KEY}`,
        { method: "GET" }
      );
      const json = await query.json();
      return json;
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drop pin at exact location 📍</Text>
      <View style={{ height: "70%", width: "100%" }}>
        <MapView style={styles.map}>
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
      <View>
        <Text style={styles.labelTxt}>Enter your address</Text>
        <TextInput
          style={styles.addressInput}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAdress}
        />
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
  labelTxt: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    marginTop: 20,
    marginBottom: 12,
  },
  addressInput: {
    padding: 15,
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    backgroundColor: COLORS.lightGreyBg,
    borderRadius: 4,
    width: "100%",
  },
});
