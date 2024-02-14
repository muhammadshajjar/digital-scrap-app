import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import { useForm, Controller } from "react-hook-form";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../constants/Colors";

import GoogleAuth from "../../components/ui/GoogleAuth";
import AuthInput from "../../components/ui/AuthInput";

import auth from "@react-native-firebase/auth";
import { generateUserName } from "../../helper/utilityFunctions";

import firestore from "@react-native-firebase/firestore";

const Signup = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const { firstName, lastName, email, password } = data;

      const result = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      const userInfo = {
        uid: result?.user.uid,
        userName: generateUserName(result?.user.email),
        email: result?.user.email,
        displayName: firstName + " " + lastName,
      };

      // Add Authenticated User to the list of users
      await firestore().collection("users").doc(userInfo.uid).set(userInfo);

      router.push("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("That email address is already in use!");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("That email address is invalid!");
      } else {
        Alert.alert("Something went wrong!", error);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.form}>
        <Text style={styles.heading}>Create Account</Text>
        <ScrollView>
          <GoogleAuth forSignUp={true} />
          <Text style={styles.alternativeTxt}>Or, register with email...</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <AuthInput
                placeholder="First Name"
                icon={<AntDesign name="user" size={20} color="#666" />}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
          {errors.email && (
            <Text style={styles.feedbackTxt}>Please enter first name!</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <AuthInput
                placeholder="Last Name"
                icon={<AntDesign name="user" size={20} color="#666" />}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
          {errors.email && (
            <Text style={styles.feedbackTxt}>Please enter last name!</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, // Basic email pattern
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <AuthInput
                placeholder="test@example.com"
                icon={
                  <MaterialIcons
                    name="alternate-email"
                    size={20}
                    color="#666"
                  />
                }
                inputType="email-address"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.feedbackTxt}>
              Please enter valid email address!
            </Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 6,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <AuthInput
                placeholder="Password"
                icon={
                  <Ionicons
                    name="ios-lock-closed-outline"
                    size={20}
                    color="#666"
                  />
                }
                inputType="password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.feedbackTxt}>Minimum Length must be 6!</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match!",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <AuthInput
                placeholder="Confirm Password"
                icon={
                  <Ionicons
                    name="ios-lock-closed-outline"
                    size={20}
                    color="#666"
                  />
                }
                inputType="password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <Text style={styles.feedbackTxt}>
              {errors.confirmPassword.message}
            </Text>
          )}

          <Pressable onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={styles.btnTxt}>{"SignUp"}</Text>
          </Pressable>

          {isSubmitting && (
            <ActivityIndicator
              style={{ marginTop: 20 }}
              size="small"
              color={COLORS.primaryGreen}
            />
          )}

          <View style={styles.accountContainer}>
            <Text style={styles.accountTxt}>Already have an account?</Text>
            <Link href="/login" style={styles.accountAction}>
              Login
            </Link>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 40,
  },
  alternativeTxt: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: COLORS.lightGrey,
    marginTop: 20,
    marginBottom: 20,
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  feedbackTxt: {
    marginTop: 5,
    color: "red",
  },
  btn: {
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 13,
    marginTop: 30,
  },
  btnTxt: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    paddingVertical: 18,
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountTxt: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  accountAction: {
    fontFamily: "Montserrat-SemiBold",
    color: COLORS.primaryGreen,
    marginLeft: 4,
    fontSize: 16,
  },
});
