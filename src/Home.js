import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Button } from "react-bootstrap";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { Container } from "react-bootstrap";
import Modal from './Modal/Modal'
const Home = () => {
  const { logOut, user } = useAuth();
   const [info,setInfo]=useState("")
   const [name,setName]=useState("")
   const [modal, setModal] = useState(false)

  const navigate = useNavigate();

  const   getData = async () => {
  

    const docRef = doc(db, "users", "userinfo");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setName(docSnap.data().email)
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
    }

const openModal = () => {
  setModal(true);
}

const closeModal = () => {
  setModal(false);
}
console.log(modal)
useEffect(() => {
  getData();
}, []);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
        // {/* <Container className='d-flex align-items-center justify-content-center'  */
  const container = {position:"relative", width: "auto", width: "70%", left:"27%"}
  return (
    <div style={container}>
    {/* <div className="flex">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
       <div className='p-5' >
        <div className="mb-3">
      <button className="btn btn-sm btn-dark" onClick={openModal}>Modal</button>
      </div>
     
      {/* <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
      {modal && <Modal closeModal={closeModal}/>}
      
      </div>
    </div>
  );
};

export default Home;


