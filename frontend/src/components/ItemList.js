import React from 'react';
import { deleteItem } from '../api'; // <-- Importando do api.js


export default function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name} - {item.description} <button onClick={() => deleteItem(item.id)}>Deletar</button></li>
      ))}
    </ul>
  );
}
