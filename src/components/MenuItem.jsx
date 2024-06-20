import Data from "../data/Data";
const MenuItem = () => {
  return (
    <>
      {Data.map(({ name, image, price }) => {
        return (
          <div className="menuItem" key={name}>
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ${price} </p>
          </div>
        );
      })}
    </>
  );
};

export default MenuItem;
