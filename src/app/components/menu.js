const Menu = () => {
  const items = ["Aisle", "About", "Work", "Careers", "Contanct"];

  const Item = ({ title, setMenuIsActive }) => {
    return <p className="text-5xl text-black cursor-pointer">{title}</p>;
  };

  return (
    <div id="menu" className="w-full h-screen z-[110] absolute -translate-y-full duration-1000 flex flex-col items-center justify-center gap-10">
      {items.map((i, index) => {
        return <Item key={index} title={i} />;
      })}
    </div>
  );
};

export default Menu;
