import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Feed from '../pages/Feed'
import Profile from "../pages/Profile";

import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={
                ({route}) => (
                    {
                        // Definindo um ícone em cada rota
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if(route.name === 'Feed'){
                                iconName = focused ? "home" : "home-outline"
                            }else{
                                iconName = focused ? "person" : "person-outline"
                            }

                            return <Ionicons name={iconName} size={size} color={color}/>
                        },
                        tabBarActiveTintColor: "green",
                        tabBarInactiveTintColor: "red",
                        tabBarLabelStyle: {
                            fontSize: 14,
                            fontWeight: '600',
                        },
                        tabBarStyle:{
                            height: 60,
                            paddingBottom: 5
                        }
                    }
                ) 
            }
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Perfil" component={Profile}/>
        </Tab.Navigator>
    </NavigationContainer>  
)