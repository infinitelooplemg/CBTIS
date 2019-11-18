import React from "react";
import {  FlatList } from "react-native";
import PaperworkListItem from "./PaperworkListItem";

const PapwerworkLIst = () => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={DATA}
      renderItem={({ item }) => <PaperworkListItem paperwork={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default PapwerworkLIst;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Reposición de Credencial",
    description: "Reposicion de credencial del plantel para los alumnos",
    price: 10.0
  },  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
    title: "Impresión Certificado",
    description: "Impresión de un duplicado de tu certificado de estudios",
    price: 90.0
  },  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3",
    title: "Inscripción",
    description: "Para aqui tu inscripción para tu proximo semestre",
    price: 1200.0
  }
];
