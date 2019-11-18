/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import registerScreens from "./src/navigation/screens";
import { PaperWorkTabItem } from "./src/navigation/tabitems/PaperworkTabItem";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({root:{component:{name:"LoginScreen"}}})
  // Navigation.setRoot({
  //   root: { bottomTabs: { id: "CBTISTabBar", children: [PaperWorkTabItem] } }
  // });
});
