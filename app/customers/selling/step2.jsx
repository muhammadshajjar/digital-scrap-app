import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SellingFormSteps from "../../../components/ui/SellingFormSteps";

import { useIsFocused } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { changeProgress } from "../../../store/redux/sellingSlice";

import SellingFromStepsBtn from "../../../components/ui/SellingFormStepsBtn";

import DateTimePicker from "@react-native-community/datetimepicker";

import { useForm, Controller } from "react-hook-form";
import { COLORS } from "../../../constants/Colors";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Step2 = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimepicker, setShowTimepicker] = useState(false);

  useEffect(() => {
    isFocused && dispatch(changeProgress(2));
  }, [isFocused]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      date: "",
      time: "",
      weight: "",
    },
  });
  const onSubmit = (data) => {
    const { date, time, weight } = data;
    router.push("/customers/selling/step3");
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const toggleTimePicker = () => {
    setShowTimepicker(!showTimepicker);
    setShowDatePicker(false);
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

  const timeChangeHandler = ({ type }, selectedTime) => {
    if (type === "set") {
      const currentTime = selectedTime;
      setValue("time", currentTime, { shouldValidate: true });
      setTime(currentTime);
      if (Platform.OS === "android") {
        toggleTimePicker();
      }
    } else {
      toggleTimePicker();
    }
  };

  return (
    <View style={styles.container}>
      <SellingFormSteps />
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.labelTxt}>Schedule Date</Text>
              <View style={styles.fieldContainer}>
                <TouchableOpacity
                  onPress={toggleDatePicker}
                  style={{ width: "80%" }}
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
                <AntDesign
                  name="calendar"
                  size={34}
                  color={COLORS.primaryGreen}
                  onPress={toggleDatePicker}
                />
              </View>

              {showDatePicker && (
                <DateTimePicker
                  id="34t34"
                  mode="date"
                  value={time}
                  onChange={dateChangeHandler}
                  display="spinner"
                  themeVariant="light"
                />
              )}
            </>
          )}
          name="date"
        />
        {errors.date && (
          <Text style={styles.feedbackTxt}>Please select date!</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.labelTxt}>Schedule Time</Text>
              <View style={styles.fieldContainer}>
                <TouchableOpacity
                  onPress={toggleTimePicker}
                  style={{ width: "80%" }}
                >
                  <TextInput
                    placeholder="10: 35 am"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={time.toLocaleTimeString()}
                    pointerEvents="none"
                    editable={false}
                    style={styles.pickerField}
                  />
                </TouchableOpacity>
                <AntDesign
                  name="clockcircleo"
                  size={34}
                  color={COLORS.primaryGreen}
                  onPress={toggleTimePicker}
                />
              </View>

              {showTimepicker && (
                <DateTimePicker
                  id="232342"
                  mode="time"
                  value={time}
                  onChange={timeChangeHandler}
                  display="inline"
                />
              )}
            </>
          )}
          name="time"
        />
        {errors.time && (
          <Text style={styles.feedbackTxt}>Please select time!</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.labelTxt}>Approx. Weight</Text>
              <View style={[styles.fieldContainer]}>
                <TextInput
                  placeholder="/kg"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={[styles.pickerField, { width: "80%" }]}
                />

                <MaterialCommunityIcons
                  name="weight-kilogram"
                  size={34}
                  color={COLORS.primaryGreen}
                />
              </View>
            </>
          )}
          name="weight"
        />
        {errors.weight && (
          <Text style={styles.feedbackTxt}>Please enter approx. weight!</Text>
        )}
      </View>

      <SellingFromStepsBtn
        fPath="/customers/selling/step3"
        bPath="/customers/selling/form"
        onSubmitCallback={handleSubmit(onSubmit)}
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
});
