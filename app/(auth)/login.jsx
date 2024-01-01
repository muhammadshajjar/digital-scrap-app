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

import { auth } from "../../lib/firebase/config";
import {
  useAuthSignInWithEmailAndPassword,
  useAuthSendPasswordResetEmail,
} from "@react-query-firebase/auth";


const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useAuthSignInWithEmailAndPassword(auth, {
    onError(error) {
      console.log(error.message);
    },
    onSuccess() {
      router.push("/customers/selling");
    },
  });

  const forgotPasswordMutation = useAuthSendPasswordResetEmail(auth, {
    onError(error) {
      console.log(error.message);
    },
    onSuccess() {
      Alert.alert("Password reset email sent successfully");
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    mutation.mutate({ email, password });
  };

  const forgotPasswordHandler = async () => {
    forgotPasswordMutation.mutate({
      email: "muhammadshajjar99@gmail.com",
    });
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
        <ScrollView>
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
             {forgotPasswordMutation.isLoading ? "Sending..." : "Forgot?"}

            </Text>
          </TouchableOpacity>
          <Pressable onPress={handleSubmit(onSubmit)} style={styles.btn}>
            <Text style={styles.btnTxt}>
              {mutation?.isLoading ? "...." : "Login"}
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
    height: 360,
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
