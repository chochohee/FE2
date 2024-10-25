import React from "react";
import { useState } from "react";

export default function FormAdd({ setPets }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleSpeciesInput(e) {
    setSpecies(e.target.value);
  }

  function handleAgeInput(e) {
    setAge(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, species, age);

    // 함수형 업데이트
    // 사용해야하는 경우 : 새롭게 업데이트 되는 값이 기존값을 기반으로 했을 경우
    setPets((prev) => {
      return [...prev, { name, species, age, id: Date.now() }];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새로운 애완동물을 추가하세요!</legend>
        <input
          type="text"
          placeholder="이름"
          onChange={handleNameInput}
          value={name}
        />
        <input
          type="text"
          placeholder="종 "
          onChange={handleSpeciesInput}
          value={species}
        />
        <input
          type="text"
          placeholder="나이"
          onChange={handleAgeInput}
          value={age}
        />
        <button type="submit">추가하기</button>
      </fieldset>
    </form>
  );
}
