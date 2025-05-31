
import React, { useContext } from 'react';
import { authContext } from '../Authprovider/AuthProvider';

const Modal = () => {
    const {user}=useContext(authContext)
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    
    <p className="py-4">{user?.displayName}</p>
    <img src={user?.displayName} alt="" />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Modal;