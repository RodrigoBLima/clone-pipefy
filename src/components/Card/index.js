import React from "react";

import { Container, Label } from "./styles";

function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
        <p>{data.content}</p>
        <img src={data.user} alt="" />
      </header>
    </Container>
  );
}

export default Card;
