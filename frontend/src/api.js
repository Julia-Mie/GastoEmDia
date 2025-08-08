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


export const deleteItem = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/items/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao deletar item');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao deletar:', error);
    throw error;
  }
};
