import React, { useState } from 'react'
import {collection,addDoc,serverTimestamp} from "firebase/firestore"
import auth, {db} from '../utils/Firebase';

export default function Firebaseadd() {
  const [message,setmessage]=useState({
    chat:""
  })

function handlechange(e){
const {name,value}=e.target
setmessage((prevState) => ({
    ...prevState,
    [name]: value,
    
  }
 
  ));

}

//useMemo
//useCallback
//useReducer


function handlesubmit(e){
    e.preventDefault();
    console.log(message);
    // Here you would typically handle the submission to Firebas
    console.log(auth.currentUser.uid);
    adddata({...message,createdAt:serverTimestamp(),userId:auth.currentUser.uid})
   //   console.log(e.chat.value)
  };
  async function adddata(data){
    try {
        const docRef = await addDoc(collection(db, "messages"), data);
        console.log("Document written with ID: ", docRef.id);
        setmessage({ chat: '' });
        // console.log(message)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
       
    }
    return (
    <div className='w-1/3 mx-auto '>
        <form onSubmit={handlesubmit}>
            <input 
            name='chat'
            value={message.chat}
          onChange={handlechange}
            className=' w-full ' 
            type='text' placeholder='Enter message'/>
       <button className=' bg-green-500 rounded-sm px-5 mt-3 ' type='submit'>Send</button>
        </form>
    </div>
  )
}
