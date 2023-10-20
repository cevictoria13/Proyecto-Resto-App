import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Button, Card } from "react-bootstrap";

export const Gastronomia = () => {
  const [Gastronomia, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "Menu");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data();
          // data.id = doc.id
          return data;
        });

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getMenu();
  }, []);

  console.log(Gastronomia);

  return (
    <div>
      <h1 className="text-center">Gastronomía</h1>

      <div>
        {Gastronomia.map((plato) => (
          <div key={plato.id}>
            <card style={{ width:"11rem"}}>
              <Card.Img variant="top" src={plato.imagen} alt={plato.nombre} />
              <Card.Body>
                <Card.Title>{plato.nombre}</Card.Title>
                <Card.Text>{plato.detalle}</Card.Text>
                <Button variant="success">Precio: ${plato.precio}CLP</Button>
              </Card.Body>
            </card>
          </div>
        ))}
      </div>
    </div>
  );
};
