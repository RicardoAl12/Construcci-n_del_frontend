import React, { useEffect, useState } from "react";

export default function HistorialList() {
  const [historiales, setHistoriales] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/historiales/")
      .then((res) => res.json())
      .then((data) => setHistoriales(data));
  }, []);

  return (
    <div>
      <h2>Historiales</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Paciente</th>
            <th>ID Médico</th>
            <th>Descripción</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {historiales.map((h) => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.paciente_id}</td>
              <td>{h.medico_id}</td>
              <td>{h.descripcion}</td>
              <td>{h.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}