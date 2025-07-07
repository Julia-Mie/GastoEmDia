import { useEffect, useState } from 'react';
import { fetchItems } from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>CRUD de Itens</h1>
      <ItemForm onAdd={handleAdd} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
