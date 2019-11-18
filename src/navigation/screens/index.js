import { Navigation } from "react-native-navigation";
import CBTLoginScreen from "./CBTLoginScreen";
import PaperworkScreen from "./PaperworkScreen";
import PaymentScreen from "./PaymentScreen";
import ProfileScreen from "./ProfileScreen";

export default registerScreens = () => {
  Navigation.registerComponent("LoginScreen", () => CBTLoginScreen);
  Navigation.registerComponent("PaperworksScreen", () => PaperworkScreen);
  Navigation.registerComponent("PaymentScreen", () => PaymentScreen);
  Navigation.registerComponent("ProfileScreen", () => ProfileScreen);
};
