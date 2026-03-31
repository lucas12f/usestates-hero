import { useState } from 'react'
import './App.css'

export default function App() {

  const CLASSES = [
    { nome: "Mago", emoji: "🧙‍♂️"},
    { nome: "Guerreiro", emoji: "⚔️"},
    { nome: "Arqueiro", emoji: "🏹"},
    { nome: "Curandeiro", emoji: "➕"},
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [hp, setHp] = useState(100); //número
  const [vivo, setVivo] = useState(true); //boolean
  const [classe, setClasse] = useState(CLASSES[0]); //objeto

  const receberDano = () => {
    const novoHp = Math.max(0, hp-10);
    setHp(novoHp);
    setVivo(novoHp > 0);
  }

  const curar = () => {
    setHp(100);
    setVivo(true);
  }

  const pct = hp/100;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";
  
  return (
    <>
      <main>
        <section>

          <h1>RPG useStates</h1>
          <div className="thumb">🧙‍♂️</div>
          <input type="text" 
          className='nome'
          placeholder='Nome do Herói'
          />


          <div className="status">
            <p>Status</p>
            <p>Vivo</p>
            <span>VIVO (boolean)</span>
            <span>true</span>
          </div>

          <p className='vida'>Pontos de vida (HP) 100/100</p>
          <div className="barra"></div>

          <button>Receber Dano</button>
          <button>Curar</button>
          
          <div className="classes">
            <button>🧙‍♂️ Mago</button>
            <button>⚔️ Guerreiro</button>
            <button>🏹 Arqueiro</button>
            <button>➕ Curandeiro</button>
          </div>
        </section>
      </main>
    </>
  )
}

