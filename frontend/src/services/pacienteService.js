const API_URL = "http://localhost:8000/pacientes";

export async function getPacientes() {
  const res = await fetch(API_URL);
  return res.json();
}