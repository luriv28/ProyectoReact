const ItemListContainer = ({ greeting, handleClick }) => {
  return (
    <>
      <div>
        <a href="#" className="contenedorItemList">
          <h3 onClick={() => handleClick()}>{greeting}</h3>
        </a>
      </div>
    </>
  );
};
export default ItemListContainer;
