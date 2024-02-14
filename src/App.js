import Accueil from "./composant/Accueil"
import { Link ,  Route , Routes , BrowserRouter} from 'react-router-dom'
import Addstgrs from "./composant/Addstgrs"
import Editstags from "./composant/Editstags"
import './App.css'

export default function App() {
  return (
     <div>
     <BrowserRouter>
     <tr>
         <th><Link to="/Accueil">Accueil</Link></th>
         <th><Link to="/Addstg">Add Stagiaire</Link></th>
     </tr>
     <Routes>
         <Route path="/Accueil" element={<Accueil/>}/>
         <Route path="/Addstg" element={<Addstgrs/>}/>
         <Route path="/Editstags/:idS" element={<Editstags/>}/>
     </Routes>
    </BrowserRouter>
     </div>
  )
}
