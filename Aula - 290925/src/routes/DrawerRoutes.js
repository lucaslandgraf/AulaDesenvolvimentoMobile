import { NavigationContainer } from "@react-navigation/native"; 
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../pages/Home'
import Pagamentos from "../pages/Pagamentos";
import Pedidos from "../pages/Pedidos";

const Drawer = createDrawerNavigator();

export default () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Inicio">
            <Drawer.Screen name="Inicio" component={Home} />
            <Drawer.Screen name="Pagamentos" component={Pagamentos} />
            <Drawer.Screen name="Pedidos" component={Pedidos} />
        </Drawer.Navigator>
    </NavigationContainer>
)