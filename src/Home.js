import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Button } from "react-bootstrap";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const { logOut, user } = useAuth();
   const [info,setInfo]=useState("")
   const [name,setName]=useState("")

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

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome  {name}<br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;


