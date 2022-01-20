import {useState,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css"

const Container = styled.div`
display: grid;
grid-template-columns: repeat(5, 18%);
grid-gap: 2%;
width: 100%;


margin-top: 5%;
`


const Image = styled.img`
width : 100%;

`
const Box = styled.div`
:hover{
border-radius: 10px;
padding: 10px;
}

p {
  margin-top: -3px;   // change margin here...! 
}

  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
   
`
const Div = styled.div`
  display:flex;

`


const Filter = styled.div`
width: 25%;
 border: 1px solid black;
`


export const Products = () => {
    const [set,setData] = useState([]);

    const getProdData = async ()=>{
        let res = await fetch(" http://localhost:3001/prods");
        let d = await res.json();
        console.log(d)
        setData(d)
    } 

    useEffect(()=>{
        getProdData()
    }, []);
    
    const handleAddToBag = (id, image, title, price,description) => {
    const payload = {
      product_id: id,
      image: image,
      description:description,
      title: title,
      price: price,
    };
      //json-server db.json --port 3001 --watch
    fetch("http://localhost:3001/bag", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(alert("Added successfully"));
  };

  return (
      
    <Div>
     <Filter>

        </Filter>
  
      <Container>
       
           {
               set.map((e)=>(
                   <Box>
                    <div><Image src={e.image} alt=""/></div>
                   <div>
                     
                  <h3>{e.title}</h3>
                <p> {e.description}</p>
                   
                   <p>{e.price}
                     <Link style={{ textDecoration: "none", marginLeft: "40%" }}
                       to={`/products/${ e.id }`}>More Info</Link>
                   </p>
                   
                   <button onClick={() =>
                     handleAddToBag( e.product_id, e.image, e.title, e.price )}
                     style={{ marginLeft: "1%" }}>Add to Cart</button>
                   
                   <button style={{ marginLeft: "20%" }}>Buy Now</button></div>
                   </Box>
               ))
           }
      </Container>
        </Div>
    )
}