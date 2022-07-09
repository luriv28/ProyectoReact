const ItemListContainer = ({ greeting }) => {
  const handleClick = () => {
    alert("Proximamente podras visualizar todas nuestras novedades");
  };
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
