import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Cocteleria } from "../components/CardCocteleria"
import { Menu } from "../components/CardMenu"

 export const Carta = () => {


 

  //referencia a la coleccion de tragos
  const collectionRef = collection(db, "cocteleria");
  const [cocteleria, setCocteleria] = useState([]);

  const getCocteleria = async () => {
    // try {

    const response = await getDocs(collectionRef);
    //console.log(response)
    setCocteleria(response.docs.map(doc => ({ ...doc.data(), id: doc.id })))



    // } catch (error) {
    //   //console.log(error);
    // }
  };


  useEffect(() => {

    getCocteleria();
  }, []);



  const collectionRe = collection(db, "Menu");
  const [menu, setMenu] = useState([]);

const getMenu = async () => {
  const response = await getDocs(collectionRe);
  setMenu(response.docs.map(doc =>({ ...doc.data(), id: doc.id })))
};


  useEffect(() => {

    getMenu();
        },[]);

       





  



  return (
    <>
     
      <div>
        <Menu menu ={menu} />
       
        <Cocteleria cocteleria={cocteleria} />


      </div>
    </>
  )


  }
























