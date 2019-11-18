import { Navigation } from "react-native-navigation";
import { PRIMARY_COLOR } from "../constants";
import {PaperWorkTabItem} from '../navigation/tabitems/PaperworkTabItem'
export const goToPaperworkScreens = () => {
 Navigation.setRoot({
    root: { bottomTabs: { id: "CBTISTabBar", children: [PaperWorkTabItem] } }
  });
};

export const presentProfileScreen = () => {
  Navigation.showModal({
    stack: {
      id: "ProfileScreenStack",
      children: [
        {
          component: {
            name: "ProfileScreen",
            options: {
              topBar: {
                title: { text: "Perfil de estudiante",color:"white" },
                background: {
                  color: PRIMARY_COLOR
                },rightButtons:[{text:"Regresar",color:"white"}]
              }
            }
          }
        }
      ]
    }
  });
};

export const pushPaymentScreen = componentId => {
  Navigation.push(componentId, {
    component: {
      name: "PaymentScreen",
      options: {
        topBar: {
          title: {
            text: "Método de pago"
          }
        }
      }
    }
  });
};
