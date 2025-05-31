import React, { useContext } from 'react';
import { authContext } from '../Authprovider/AuthProvider';
import Modal from './Modal';


const Profile = () => {
    const{mangeProfile}=useContext(authContext)
    const handleProfile=(e)=>{
        e.preventDefault()
        const form=new FormData(e.target)
        const lname=form.get("lname")
        const lphoto=form.get("lphoto")
      console.log(lname,lphoto);
      const Info={
        lname,lphoto
      }
      
      const localdata=localStorage.getItem("update")
      const saveData=[]
      if(localdata){
        saveData=JSON.parse(localdata)
      }
      saveData.push(Info)
      localStorage.setItem("update",JSON.stringify(saveData))
    }
    const {user}=useContext(authContext)
    return (
        <div className='w-1/2 mx-auto bg-base-200'>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className='w-[200px] rounded-full' src={ user?.photoURL} alt="" />
  </figure>
  <div className="text-center text-xl font-serif">
    <h2 className="">name:{user?.displayName}</h2>
    <p>{user?.email }</p>
    <div className='mt-5 '>
        <h2>UpdateProfile</h2>
    <form className='flex flex-col ml-3' onSubmit={handleProfile}>
    <label className="label text-center ">Name</label>
          <input  type="name" name='lname' className="input  " placeholder="name" />
        <label className="label ">PhotoURL</label>
          <input type="photoUrl" name='lphoto' className="input " placeholder="PhotoURL" />
          <div className="card-actions justify-end">
            <button className='btn btn-neutral'>Update</button>
    </div>
    </form>

    </div>
    <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>See Upadate Profile</button>
  </div>
</div>
 <Modal></Modal>
        </div>
    );
};

export default Profile;