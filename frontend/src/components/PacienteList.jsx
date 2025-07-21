import React, { useEffect, useState } from "react";
import { getPacientes } from "../services/pacienteService";

export default function PacienteList() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getPacientes().then(setPacientes);
  }, []);

  return (
    <div>
      <h2>Pacientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.cedula}</td>
              <td>{p.email}</td>
              <td>{p.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}