export const AddActions =(newstg)=>{
    return {type : 'Add', payload:newstg}
}

export const EditActions = (stgup) =>{
    return {type : 'Edit' , payload:stgup}
}

export const  DeleteActions = (stgdlt) =>{
    return {type : 'Delete' , payload:stgdlt}
}
