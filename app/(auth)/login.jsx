import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Image } from "expo-image";
import { Link, router } from "expo-router";

import { useForm, Controller } from "react-hook-form";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/Colors";
import GoogleAuth from "../../components/ui/GoogleAuth";
import AuthInput from "../../components/ui/AuthInput";

import auth from "@react-native-firebase/auth";

const Login = () => {
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const userEmail = watch("email", "");

  const onSubmit = async (data) => {
    const { email, password } = data;
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user && router.push("/customers");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
      });
  };

  const forgotPasswordHandler = async () => {
    if (userEmail.length > 0) {
      auth()
        .sendPasswordResetEmail(userEmail)
        .then(() => {
          Alert.alert("Success", "Password reset email sent successfully :)");
        })
        .catch((error) => {
          const errorMessage = error.message;
          Alert.alert("Error", errorMessage);
        })
        .finally(() => {
          setForgotPasswordLoading(false);
        });
    } else {
      Alert.alert("Error", "Please enter your email again :(");
    }
  };
  return (
    <>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/images/loginillustration.png")}
          placeholder="Into Illustration Image"
          contentFit="cover"
          transition={1000}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.heading}>Login</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
              <>
                <AuthInput
                  placeholder="Password"
                  icon={
                    <Ionicons
                      name="ios-lock-closed-outline"
                      size={20}
                      color="#666"
                    />
                  }
                  inputType={"password"}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </>
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.feedbackTxt}>Minimum Length must be 6!</Text>
          )}
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: 10 }}
            onPress={forgotPasswordHandler}
          >
            <Text
              style={{
                fontSize: 15,
                color: COLORS.primaryGreen,
                fontFamily: "Montserrat-SemiBold",
              }}
            >
              {forgotPasswordLoading ? "seding..." : "Forgot?"}
            </Text>
          </TouchableOpacity>
          <Pressable onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={styles.btnTxt}>
              {isSubmitting ? "Loading.." : "Login"}
            </Text>
          </Pressable>
          <Text style={styles.alternativeTxt}>Or, login with...</Text>

          <GoogleAuth />
          <View style={styles.accountContainer}>
            <Text style={styles.accountTxt}>Don’t have an account?</Text>
            <Link href="/signup" style={styles.accountAction}>
              Sign up
            </Link>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 6,
  },
  imgContainer: {
    //  flex: 3,
    height: 390,
    width: "100%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  form: {
    flex: 4,
    paddingHorizontal: 20,
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
  alternativeTxt: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: COLORS.lightGrey,
    marginTop: 20,
    marginBottom: 20,
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
