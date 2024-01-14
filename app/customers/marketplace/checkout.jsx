import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Link } from 'expo-router'
const Checkout = () => {
  return (
    <SafeAreaView>
      <Text>This is CART CHECKOUT AND ORDER CONFIRMATION PAGE!!</Text>
      <Link href="/customers/marketplace">Go back on Market Place!</Link>
    </SafeAreaView>
  )
}

export default Checkout

const styles = StyleSheet.create({})