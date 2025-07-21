const API_URL = "http://localhost:8000/historiales";

export async function getHistoriales() {
  const res = await fetch(API_URL);
  return res.json();
}