import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddActions } from '../config/Actions'
import { useNavigate } from 'react-router-dom'

export default function Addstgrs() {
  const strs = useSelector(d=>d.stags)
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const [nom,setnom]=useState("")
  const [prenom,setprenom]=useState("")
  const lastId = strs.map(s=>s.id);
  
  

  const handeldelte =(e)=>{
      e.preventDefault()
      
     if(nom && prenom){
      const confirm = window.confirm('Are you sure?')
      if(confirm)
      {
        dispatch(AddActions({
          id : lastId[lastId.length -1] + 1,
          nom : nom,
          prenom : prenom
        }))
        setnom(" ")
        setprenom(" ")
        alert('Added successfully')
        navigate('/Accueil')
      }
     }else{
       return alert('Add Stagiaire')
     }
      
  }

  return (
    <div>
      <form>
            <h1>Add Stagiaires :</h1>
            <tr>
                <td>Nom</td>
                <td><input type='text' value={nom} onChange={e=>setnom(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Prenom</td>
                <td><input type='text' value={prenom} onChange={e=>setprenom(e.target.value)}/></td>
            </tr>
            <tr>
                <td><button onClick={e=>handeldelte(e)}>Add</button></td>
            </tr>   
      </form>
    </div>
  )
}
