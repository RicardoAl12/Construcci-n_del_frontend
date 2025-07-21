import React from "react";
import "./App.css";
import PacienteList from "./components/PacienteList";
import MedicoList from "./components/MedicoList";
import CitaList from "./components/CitaList";
import HistorialList from "./components/HistorialList";

export default function App() {
  return (
    <div>
      <h1>Sistema de Citas Médicas</h1>
      <PacienteList />
      <MedicoList />
      <CitaList />
      <HistorialList />
    </div>
  );
}