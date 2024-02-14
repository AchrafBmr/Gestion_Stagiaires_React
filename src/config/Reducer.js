

const  initialState = {
    stags:[
        {id:1, nom:'kamal' , prenom:'samid' },
        {id:2, nom:'rami' , prenom:'akro' },
        {id:3, nom:'khalid' , prenom:'rami' }
    ]
}

export const reducer=(state = initialState , action)=>{
    switch (action.type) {
        case 'Add':
            return {...state,stags:[...state.stags,action.payload]}

        case 'Edit':
            const stg = state.stags.find((u)=>u.id === parseInt(action.payload.id))
            if (stg)
            {
                stg.nom = action.payload.nom
                stg.prenom = action.payload.prenom
            }
            return state;
        
        case 'Delete':
            return {...state,stags:[...state.stags.filter((e)=> e.id !== parseInt(action.payload))]}
  
        default:
            return state
    }
}