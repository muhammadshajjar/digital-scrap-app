import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

const Signup = () => {
  return (
    <SafeAreaView>
      <Text>signup</Text>
      <Link href="/login">Already have an account?</Link>
    </SafeAreaView>
  )
}

export default Signup;

const styles = StyleSheet.create({})