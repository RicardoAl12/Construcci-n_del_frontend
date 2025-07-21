const API_URL = "http://localhost:8000/medicos";

export async function getMedicos() {
  const res = await fetch(API_URL);
  return res.json();
}