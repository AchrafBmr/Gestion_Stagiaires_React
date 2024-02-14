import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EditActions } from '../config/Actions'

export default function Editstags() {
    const dispatch=useDispatch()
    const { idS } = useParams()
    const stdnt = useSelector(data=>data.stags.find(e=>e.id === parseInt(idS)))
    const navigate = useNavigate()
    const [nom,setnom]=useState(stdnt.nom)
    const [prenom,setprenom]=useState(stdnt.prenom)


    const handelUp = (e) =>{
        e.preventDefault()
        if (nom && prenom){
          dispatch(EditActions({
            id:idS,
            nom : nom,
            prenom : prenom
        }))
        setnom(" ")
        setprenom(" ")
        navigate('/Accueil')
        return alert('Update successfully')
        }else{
          return alert('write nom & prenom')
        }
        
    }
  return (
    <div>
      <form>
            <h1>Update Stagiaires :</h1>
            <tr>
                <td>Nom</td>
                <td><input type='text' value={nom} onChange={e=>setnom(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Prenom</td>
                <td><input type='text' value={prenom} onChange={e=>setprenom(e.target.value)}/></td>
            </tr>
            <tr>
                <td><button onClick={e=>handelUp(e)}>Update</button></td>
            </tr>   
      </form>
    </div>
  )
}
