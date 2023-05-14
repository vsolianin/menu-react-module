import { useState } from 'react';
import Categories from './Categories';
import Title from "./Title";
import Menu from './Menu';
import menu from "./data";

const allCategories = ['all', ...Array.from(new Set(menu.map((item) => item.category)))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category) => {

    if (category === 'all') {
      return setMenuItems(menu);
    }

    console.log(category);
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return <main>
    <section className="menu">
      <Title text='Our Menu' />
      <Categories categories={categories} filterItems = {filterItems}/>
      <Menu items={menuItems} />
    </section>
  </main>;
};
export default App;
