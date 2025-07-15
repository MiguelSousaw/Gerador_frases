import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function App() {
  const [textofrase, setTextofrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allfrases = [
    {
      id: 1, 
      nome: "Motivação",
      frases: ["Siga os bons e aprenda com eles.", 'Acredite em si mesmo e vá em frente!', 
      'A vida é feita de escolhas, faça as certas.','O sucesso é a soma de pequenos esforços repetidos dia após dia.',
      'A persistência é o caminho do êxito.', 
      'Não espere por oportunidades, crie-as.', 'Acredite que você pode e você já está no meio do caminho.', 
      'O único modo de fazer um excelente trabalho é amar o que você faz.']
    }, 
    {
      id: 2, 
      nome: 'Bom dia',
      frases: ['Bom dia! Que seu dia seja repleto de alegrias e conquistas ', 
      'Bom dia! Que hoje seja um dia cheio de oportunidades e sorrisos.',
      'Bom dia! Que a luz do sol ilumine seu caminho e traga boas energias.',
      'Bom dia! Que a felicidade te acompanhe em cada passo que você der hoje'
      ]
    }, 
    {
      id: 3,
      nome: 'Bem estar', 
      frases: ['Cuide de si mesmo, você é a sua prioridade.',
      'A saúde mental é tão importante quanto a saúde física.',
      'Reserve um tempo para relaxar e recarregar as energias.',
      'Pratique a gratidão diariamente, isso traz paz interior.',
      'A felicidade está nas pequenas coisas do dia a dia.',
      'Ame-se e cuide de si mesmo, você merece todo o carinho.',
      'A vida é feita de momentos, aproveite cada um deles.',
      ]
    }, 
    {
      id: 4,
      nome: 'Amor',
      frases: ['O amor é a força mais poderosa do universo.',
      'Amar e ser amado é o maior presente da vida.',
      'O amor verdadeiro não tem limites, ele é infinito.',
      'O amor é a chave que abre todas as portas da felicidade.',
      'Ame intensamente, viva plenamente.',
      'O amor é a linguagem universal que todos entendem.',
      'O amor é a luz que ilumina os caminhos mais escuros.'
      ]
    }
  ]

  function selecionarCategoria(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    const categoria = allfrases[categoriaSelecionada]
    const randomIndex = Math.floor(Math.random() * categoria.frases.length)

    setTextofrase(categoria.frases[randomIndex])
  }

  return (
   <div className = "container"> 
      <img className='img' src={logo} alt="Logo frases" />
      <h2 className='title'>Categorias</h2>
      <section className='categories_area'>
         {allfrases.map((categoria, index) => {
            return (
              <button className='category_button' key={categoria.id} 
              
              style={{
                borderWidth: categoria.nome === allfrases[categoriaSelecionada].nome ? 2 : 0,
                borderColor: "#1fa4db"
              }} 

              onClick={() => selecionarCategoria(index)}

              >{categoria.nome}</button>
            )
         })}
      </section>

      <button className='Button_frase' onClick={gerarFrase}>Gerar Frases</button>

      {textofrase && (<p className='frase'>{textofrase}</p>)}
   </div>
  )
}

export default App
