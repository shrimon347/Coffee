import React from 'react'
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from '../provider/AllProvider';

const GoogleAuth = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {signInGoogle} = useContext(AuthContext)
    const handleToLgoinWithGoogle = () => {
        signInGoogle()
        .then(result => {
          toast.success('User logged in successfully');
                    navigate(location?.state ?location.state : "/")
        })
        .catch(error => {
         console.log(error);
        })
      }
  return (
    <div className="flex justify-around">
      <button
        onClick={handleToLgoinWithGoogle}
        className="btn hover:bg-green-700 bg-green-900  text-white outline-none"
      >
        Sigin with Google
      </button>
    </div>
  )
}

export default GoogleAuth