const ContCard = (props) => {
  console.log(props);
  return <div className="cont-card">{props.children}</div>;
};

const ProductImage = (props) => {
  return <img src={props.src} alt={props.alt} />;
};

const ProductTitle = (props) => {
  return <h1>{props.children}</h1>;
};

const ProductSubTitle = (props) => {
  return <h3>{props.children}</h3>;
};

const ProductDescription = (props) => {
  return <p>{props.children}</p>;
};

export {
  ContCard,
  ProductImage,
  ProductTitle,
  ProductSubTitle,
  ProductDescription,
};
