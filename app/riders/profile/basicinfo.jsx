import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../constants/Colors";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";

import { FontAwesome5 } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

const BasicInfo = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      date: "",
      phonenumber: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    router.back();
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const dateChangeHandler = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setValue("date", currentDate, { shouldValidate: true });
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  const chooseImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result?.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const formatPhoneNumber = (input) => {
    // Filter non-digit characters from the input
    let formattedInput = input.replace(/\D/g, "");

    // Insert hyphen after every four digits
    formattedInput = formattedInput.replace(/(\d{4})(\d)/, "$1-$2");

    return formattedInput;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}>
            {!image && <FontAwesome5 name="user-alt" size={24} color="white" />}
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
              />
            )}
          </View>

          <TouchableOpacity
            onPress={chooseImageHandler}
            style={styles.addProfileBtn}
          >
            <Text style={styles.addProfileTxt}>Add Photo</Text>
          </TouchableOpacity>
        </View>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.labelTxt}>Name</Text>
              <View style={styles.fieldContainer}>
                <TextInput
                  placeholder="Enter your name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.pickerField}
                />
              </View>
            </>
          )}
          name="name"
        />
        {errors.name && (
          <Text style={styles.feedbackTxt}>Please enter your name!</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.labelTxt}>Date of Birth</Text>
              <View style={styles.fieldContainer}>
                <TouchableOpacity
                  onPress={toggleDatePicker}
                  style={{ width: "100%" }}
                >
                  <TextInput
                    placeholder="12/10/2023"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={date.toLocaleDateString()}
                    pointerEvents="none"
                    editable={false}
                    style={styles.pickerField}
                  />
                </TouchableOpacity>
              </View>

              {showDatePicker && (
                <DateTimePicker
                  id="34t34"
                  value={date}
                  mode="date"
                  onChange={dateChangeHandler}
                  display="spinner"
                  themeVariant="light"
                  maximumDate={new Date()}
                />
              )}
            </>
          )}
          name="date"
        />
        {errors.date && (
          <Text style={styles.feedbackTxt}>
            Please select your date of birth!
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 12,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.labelTxt}>Phone number</Text>
              <View style={styles.fieldContainer}>
                <TextInput
                  placeholder="0321-2523296"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(formatPhoneNumber(text))}
                  value={value}
                  style={styles.pickerField}
                  keyboardType="numeric"
                />
              </View>
            </>
          )}
          name="phonenumber"
        />
        {errors.phonenumber && (
          <Text style={styles.feedbackTxt}>
            Please enter valid phone number!
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.doneBtn}>
        <Text style={styles.doneBtnTxt}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
  formContainer: {
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 20,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: COLORS.primaryGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  addProfileBtn: {
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 16,
  },
  addProfileTxt: {
    fontFamily: "Montserrat-Medium",
    color: COLORS.primaryGreen,
  },
  labelTxt: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    marginTop: 20,
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
  feedbackTxt: {
    marginTop: 5,
    color: "red",
  },
  doneBtn: {
    backgroundColor: COLORS.primaryGreen,
    width: "80%",
    paddingVertical: 15,
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 22,
  },
  doneBtnTxt: {
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    textAlign: "center",
  },
});
