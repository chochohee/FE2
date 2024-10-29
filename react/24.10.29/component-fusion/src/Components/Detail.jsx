import styled from "styled-components";
import { ContentH2, ContentSection } from "./Common";

const ContentH2Border = styled(ContentH2)`
  border: 1px solid black;
  background-color: teal;
  color: white;
`;

export default function Detail() {
  return (
    <>
      <ContentH2Border>Detail 페이지</ContentH2Border>
      <ContentSection>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed magni
          vitae ipsa quis hic dolore assumenda magnam quia numquam, culpa et
          velit voluptatem necessitatibus id, autem consequatur. Accusamus,
          maiores nobis!
        </p>
        <a href=""></a>
      </ContentSection>
    </>
  );
}
