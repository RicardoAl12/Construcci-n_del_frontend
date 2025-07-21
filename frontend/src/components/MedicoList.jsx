import React, { useEffect, useState } from "react";

export default function MedicoList() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/medicos/")
      .then((res) => res.json())
      .then((data) => setMedicos(data));
  }, []);

  return (
    <div>
      <h2>Médicos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.nombre}</td>
              <td>{m.especialidad}</td>
              <td>{m.email}</td>
              <td>{m.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}