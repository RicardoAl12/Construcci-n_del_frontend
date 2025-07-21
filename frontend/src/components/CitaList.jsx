import React, { useEffect, useState } from "react";

export default function CitaList() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/citas/")
      .then((res) => res.json())
      .then((data) => setCitas(data));
  }, []);

  return (
    <div>
      <h2>Citas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Paciente</th>
            <th>ID Médico</th>
            <th>Fecha y Hora</th>
            <th>Motivo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.paciente_id}</td>
              <td>{c.medico_id}</td>
              <td>{c.fecha_hora}</td>
              <td>{c.motivo}</td>
              <td>{c.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}