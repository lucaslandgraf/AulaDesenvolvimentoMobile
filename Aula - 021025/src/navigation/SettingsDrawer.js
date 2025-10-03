
import { createDrawerNavigator } from "@react-navigation/drawer"

import SettingsScreen from "../screens/SettingsScreen";
import SettingsUser from "../screens/SettingsUser";

const Drawer = createDrawerNavigator();

export default function SettingsDrawer(){
    return(
        <Drawer.Navigator
            
        >
            <Drawer.Screen name="Config" component={SettingsScreen}/>
            <Drawer.Screen name="Configuração de Usuário" component={SettingsUser}/>
        </Drawer.Navigator>
    )
}