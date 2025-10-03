import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsDrawer from "./SettingsDrawer";


const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator
            screenOptions={{headershow: false}}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Perfil" component={ProfileScreen}/>
            <Tab.Screen 
                name="Config" 
                component={SettingsDrawer}
                options={{headershow: false}}
                />
        </Tab.Navigator>
    )
}