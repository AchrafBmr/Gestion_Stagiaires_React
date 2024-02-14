
import { useSelector , useDispatch  } from 'react-redux'
import { DeleteActions } from '../config/Actions'
import { Link } from 'react-router-dom'
import '../Accueil.css'
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";





export default function Accueil() {
  const stgs=useSelector(d=>d.stags)
  const dispatch = useDispatch()

  

  const handel=(id)=>{
    const confirm = window.confirm('Are you sure??')
    if(confirm)
    {
      dispatch(DeleteActions(id))
    }
  }

  return (
    <div>
      <thead>
      </thead>
      <tbody>
        <h1>liste Stagiaires</h1>
        <thead>
                <tr>
                    <th>code</th>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>action</th>
                </tr>
        </thead>
        <tbody>
            {stgs.map(e=>
              <tr>
                <td>{e.id}</td>
                <td>{e.nom}</td>
                <td>{e.prenom}</td>
                <td>
                    <Link to={`/Editstags/${e.id}`}>
                       <button><HiOutlinePencil /></button>
                    </Link>
                    <button onClick={()=>handel(e.id)}><HiOutlineTrash/></button>
                </td>
              </tr>
              )}
        </tbody>
        <h3>Nombre Stagiaire : {stgs.length} <HiOutlineUserGroup /></h3>
      </tbody>
    </div>
  )
}
