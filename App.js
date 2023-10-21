import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { ScrollView, View } from "react-native";

import Home from './src/components/Home';


export default function App() {


  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <Home />
      <Toast />

    </ScrollView>
  );
}
