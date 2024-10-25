import React from "react";
import PetList from "./PetList";
import { useState } from "react";

export default function PetAddForm() {
  const data = [
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ];

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  let newData = { name: name, species: species, age: age, id: data.length };

  function addData(event) {
    event.preventDefault();
    data.push(newData);
    console.log(data);
  }

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleSpeciesInput(e) {
    setSpecies(e.target.value);
  }

  function handleAgeInput(e) {
    setAge(e.target.value);
  }

  return (
    <>
      <form action="">
        <h2>새로운 애완동물을 추가하세요!</h2>
        <input type="text" placeholder="이름" onInput={handleNameInput} />
        <input type="text" placeholder="species" onInput={handleSpeciesInput} />
        <input type="number" placeholder="나이" onInput={handleAgeInput} />
        <button type="submit" onClick={addData}>
          추가하기
        </button>
      </form>
      <PetList data={data} />
    </>
  );
}
