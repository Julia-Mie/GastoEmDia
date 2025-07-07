const API_URL = "http://localhost:8000/items";

export async function fetchItems() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createItem(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
