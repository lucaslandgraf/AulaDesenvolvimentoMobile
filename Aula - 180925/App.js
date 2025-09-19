import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function FeedScreen(){
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 18}}>Feed</Text>
    </View>

  )
}

function ProfileScreen(){
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "green"}}>
      <Text style={{fontSize: 18}}>Profile</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: "false"}}>
        <Tab.Screen name="Feed" component={FeedScreen}/>  
        <Tab.Screen name="Perfil" component={ProfileScreen}/>
      </Tab.Navigator>    
    </NavigationContainer>
  )
}