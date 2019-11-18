import { PRIMARY_COLOR } from "../../constants";

export const PaperWorkTabItem = {
  stack: {
    id: "PaperworkStack",
    children: [
      {
        component: {
          name: "PaperworksScreen",
          options: {
            topBar: {
              title: {
                text: "Tramites Disponibles",
                color: "white"
              },
              background: {
                color: PRIMARY_COLOR
              },
              rightButtons: [
                {
                  color: "white",
                  icon: require("../../assets/icons/profile.png")
                }
              ]
            },
            bottomTab: {
              textColor: "black",
              text: "Tramites",
              fontSize: 10,
              icon: require("../../assets/icons/paperwork.png")
            }
          }
        }
      }
    ]
  }
};
