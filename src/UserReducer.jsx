import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./Data";

const userSlice  = createSlice({
    name : "name" , 
    initialState : UserList,
     reducers : {
          addUser :(state ,action) =>{
           state.push(action.payload)
          },
          updateUser : (state , action) => { 
            const {id ,name ,email} = action.payload;
             const uu = state.find(user => user.id === id);
             if (uu){
                uu.name = name;
                uu.email = email;
             }
          },
          deleteUser : (state , action) => { 
            const {id} = action.payload;
             const uu = state.find(user => user.id === id);
             if (uu){
                 return state.filter(f => f.id !== id)
             }
          },
          searchUser : (state , action) => { 
            const {id} = action.payload;
             const uu = state.find(user => user.name === id);
             if (uu){
                 return state.filter(f => f.name !== id)
             }
          },
          viewUser : (state , action) => { 
            const {id} = action.payload;
             const uu = state.find(user => user.name === id);
             if (uu){
                 return uu
             }
          },
     }
})

export const {addUser ,updateUser , deleteUser,searchUser , viewUser} = userSlice.actions
export  default userSlice.reducer;