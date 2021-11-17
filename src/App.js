import React from "react";
import Slide from "./components/Slide";

const produtos = [
  {
    userId: 1,
    id: 1,
    nome: "Nike SB Black",
    precoAntigo: 320.00,
    precoDesc: 289.99,
    descricao: "Tênis Nike SB Chron Slr Preto",
    sizes: [39, 40],
    image: "./img/nike-air/air1/air-1.jpg"
  },
  {
    userId: 2,
    id: 2,
    nome: "Nike SB Red",
    precoAntigo: 320.00,
    precoDesc: 289.99,
    descricao: "Tênis Nike SB Chron Slr Preto",
    sizes: [39, 40],
    image: "./img/nike-air/air2/air-1.jpg"
  },
  {
    userId: 3,
    id: 3,
    nome: "Nike SB Blue",
    precoAntigo: 320.00,
    precoDesc: 289.99,
    descricao: "Tênis Nike SB Chron Slr Preto",
    sizes: [39, 40],
    image: "./img/nike-air/air3/air-1.jpg"
  },
  {
    userId: 4,
    id: 4,
    nome: "Nike SB Green",
    precoAntigo: 320.00,
    precoDesc: 289.99,
    descricao: "Tênis Nike SB Chron Slr Preto",
    sizes: [39, 40],
    image: "./img/nike-air/air4/air-1.jpg"
  },
  {
    userId: 5,
    id: 5,
    nome: "Nike SB Green",
    precoAntigo: 320.00,
    precoDesc: 289.99,
    descricao: "Tênis Nike SB Chron Slr Preto",
    sizes: [39, 40],
    image: "./img/nike-air/air5/air-1.jpg" 
  }
];

function App() {

  return (
    <div>
      <Slide produtos={produtos} />
    </div>
  );
}
export default App;