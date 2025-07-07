import { useState } from 'react';
import { createItem } from '../api';

export default function ItemForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = await createItem({ name, description });
    onAdd(newItem);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
      <button type="submit">Adicionar</button>
    </form>
  );
}
