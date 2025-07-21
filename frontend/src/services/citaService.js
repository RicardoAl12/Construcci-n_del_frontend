const API_URL = "http://localhost:8000/citas";

export async function getCitas() {
  const res = await fetch(API_URL);
  return res.json();
}