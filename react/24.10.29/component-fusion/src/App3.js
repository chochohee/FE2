import React from "react";
import PriceFormatter from "./Components/PriceFormatter";
import {
  ContCard,
  ProductImage,
  ProductTitle,
  ProductSubTitle,
  ProductDescription,
} from "./Components/Card";

function App() {
  return (
    <>
      <ContCard>
        <ProductImage
          src={"https://picsum.photos/id/237/200/300"}
          alt={"검은강아지"}
        />
        <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
        <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          distinctio sed molestias saepe reiciendis fugit illum enim et
          inventore, aliquam esse non nam consectetur minima atque consequuntur
          voluptates, eum quia.
        </ProductDescription>
        <PriceFormatter price={1000} currencyCode="USD" />
        <PriceFormatter price={1000} currencyCode="KRW" />
        <PriceFormatter price={1000} currencyCode="GBP" />
        <PriceFormatter price={1000} currencyCode="JPY" />
      </ContCard>
    </>
  );
}

export default App;
