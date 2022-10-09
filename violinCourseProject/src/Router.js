import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "./pages/Welcome";
import MemberSign from "./pages/MemberSign";
import MemberResult from "./pages/MemberResult";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="WelcomePage" component={Welcome} />
        <Stack.Screen name="MemberSignPage" component={MemberSign} />
        <Stack.Screen name="MemberResultPage" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;