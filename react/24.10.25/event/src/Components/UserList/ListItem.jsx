import React from "react";
import { useState } from "react";

export default function ListItem({ data }) {
  const [isActive, setIsAvtive] = useState(false);

  return (
    <>
      <button onClick={() => setIsAvtive(!isActive)}>{data.name}</button>
      {isActive ? (
        <dl key={data.id}>
          <dt>email: </dt>
          <dd>{data.email}</dd>
          <dt>job: </dt>
          <dd>{data.job}</dd>
        </dl>
      ) : null}
    </>
  );
}
