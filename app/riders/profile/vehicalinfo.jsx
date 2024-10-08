import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import React, { useState, useEffect } from "react";
import { COLORS } from "../../../constants/Colors";

import PhotoCard from "../../../components/ui/PhotoCard";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { updateProfileInfo, getRiderProfile } from "../../../lib/firebase";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { isServerFile } from "../../../helper/utilityFunctions";

const PHOTOPLACEHOLDER = require("../../../assets/images/imageplaceholder.png");
const PHOTOPLACEHOLDERFRONT = require("../../../assets/images/vehicalcardfrontplaceholder.png");
const PHOTOPLACEHOLDERBACK = require("../../../assets/images/vehicalcardbackplaceholder.png");

const Vehicalinfo = () => {
  const queryClient = useQueryClient();
  const [vehicalPicture, setVehicalPicture] = useState(null);
  const [vehicalCardFront, setVehicalCardFront] = useState(null);
  const [vehicalCardBack, setVehicalCardBack] = useState(null);
  const currentUser = useSelector((state) => state.user.personalInfo);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["riderprofile", currentUser?.uid],
    queryFn: () => getRiderProfile(currentUser?.uid),
  });

  //Update data for editing

  useEffect(() => {
    if (data?.vehicleInfo) {
      setVehicalPicture(data?.vehicleInfo?.vehicalPicture);
      setVehicalCardFront(data?.vehicleInfo?.vehicalCardFront);
      setVehicalCardBack(data?.vehicleInfo?.vehicalCardBack);
    }
  }, []);

  const vehicalInfoMutation = useMutation({
    mutationFn: updateProfileInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["riderprofile", currentUser?.uid],
      });
      router.back();
    },
  });

  const submitDataHanlder = async () => {
    if (
      !isServerFile(vehicalCardBack) ||
      !isServerFile(vehicalCardFront) ||
      !isServerFile(vehicalPicture)
    ) {
      Alert.alert("Error", `Please fill all fields`);
      return;
    }
    const data = {
      vehicalPicture,
      vehicalCardFront,
      vehicalCardBack,
    };
    vehicalInfoMutation.mutate({
      userId: currentUser?.uid,
      infoType: "vehicleInfo",
      infoData: data,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <PhotoCard
        title="Vehicle Picture"
        photo={vehicalPicture}
        onSetPhoto={setVehicalPicture}
        PHOTOPLACEHOLDER={PHOTOPLACEHOLDER}
      />
      <PhotoCard
        title="Vehicle Card (front side)"
        photo={vehicalCardFront}
        onSetPhoto={setVehicalCardFront}
        PHOTOPLACEHOLDER={PHOTOPLACEHOLDERFRONT}
      />
      <PhotoCard
        title="Vehicle Card (back side)"
        photo={vehicalCardBack}
        onSetPhoto={setVehicalCardBack}
        PHOTOPLACEHOLDER={PHOTOPLACEHOLDERBACK}
      />
      {vehicalInfoMutation.isPending && (
        <ActivityIndicator
          style={{ marginTop: 22 }}
          size="small"
          color={COLORS.primaryGreen}
        />
      )}

      <TouchableOpacity onPress={submitDataHanlder} style={styles.doneBtn}>
        <Text style={styles.doneBtnTxt}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Vehicalinfo;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
  formContainer: {
    backgroundColor: "white",
    shadowColor: "#1B1919",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
  },
  labelTxt: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    marginBottom: 12,
  },
  fieldContainer: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 6,
  },
  pickerField: {
    padding: 15,
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    borderRadius: 4,
  },
  doneBtn: {
    backgroundColor: COLORS.primaryGreen,
    width: "80%",
    paddingVertical: 15,
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 22,
    marginBottom: 50,
  },
  doneBtnTxt: {
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    textAlign: "center",
  },
});
