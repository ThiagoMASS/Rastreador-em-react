



import {MapRender} from './components/mapRender/mapRender'
import './app.css'
import { CardC } from './components/card/card'
function App() {


  return (
    <>
  <div>
  
   <CardC title='Bem vindo ao meu map, um pequeno app de segurança que retorna a sua localização para um responsavel, ideal para pais ou até mesmo empresas que precisam monitorar  funcionarios.'    />
  <h2 className='locaAtual'>Essa é sua localização atual:</h2>
  <MapRender/>

  </div>
    </>
  )
}

export default App
