import {useState,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css"




export const Products = () => {
  const [set, setData] = useState( [] );
  const [val, setVal] = useState( '' )
  
 async function setGender( event ) {
  // d = []
     let res = await fetch(" http://localhost:3001/prods");
        let d = await res.json();
  //  console.log(d)
   
   const JavaScriptApplicants = d.filter(e => e.gender.includes(event.target.value));
   setData(JavaScriptApplicants)
  
  }

   async function setCat( event ) {
    console.log(event)
     let res = await fetch(" http://localhost:3001/prods");
        let d = await res.json();

   
   const JavaScriptApplicants = d.filter(e => e.category.includes(event.target.value));


        setData(JavaScriptApplicants)
 
  }

   async function setCol( event ) {

     let res = await fetch(" http://localhost:3001/prods");
        let d = await res.json();

   
   const JavaScriptApplicants = d.filter(e => e.color.includes(event.target.value));


        setData(JavaScriptApplicants)
 


  }




    const getProdData = async ()=>{
        let res = await fetch(" http://localhost:3001/prods");
        let d = await res.json();
        // console.log(d)
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
        <h3>FILTERS</h3>
        <hr />
        <div onChange={setGender.bind( this )}>
          
          <input type="radio" value="Men" name="gender"  /> Male
          <br />
          <input type="radio" value="female" name="gender" /> Female
            <br />
          <input type="radio" value="boy" name="gender" /> Boy
            <br />
        <input type="radio" value="girl" name="gender"/> Girl
      </div>
       
        <hr />
        <div>
          <h3> CATEGORIES</h3>
          <div onChange={setCat.bind( this )}>
         
            <input type="checkbox" name="skills" id="radio" value="jwellary" />  Jwelarry
        <br />
          
           
            <input type="checkbox" name="skills" id="radio" value="Shoes" />  Shoes
     
   <br />
       
            <input type="checkbox" name="skills" id="radio" value="Jacket" />  Jacket
         
          </div>
          < hr />
        
          <h3> Color </h3>
          <div onChange={setCol.bind( this )}>
          <input type="radio" name="price" id="radio" value="Pink" /> Red 
         <br />
            <input type="radio" name="price" id="radio" value="Blue" />  Blue
         <br />
            <input type="radio" name="price" id="radio" value="Black" />  Black
             <br />
             <input type="radio" name="price" id="radio" value="White" />   White
         <br />
            <input type="radio" name="price" id="radio" value="Golden" /> Golden
         <br />
         

          </div>
        
        
        
        </div>

        </Filter>
  
      <Container>
       
           {
               set.map((e)=>(
                   <Box>
                    <div><Image src={e.image} alt=""/></div>
                   <div className="dec">
                     
                  <h3>{e.title}</h3>
                  <p> {e.description}</p>
                   <p>{"Rs."+e.price}
                     <Link style={{ textDecoration: "none", marginLeft: "40%" }}
                       to={`/products/${ e.id }`}>More Info</Link>
                   </p>
                   
                   <button onClick={() =>
                     handleAddToBag( e.product_id, e.image, e.title, e.price )}
                     style={{ marginLeft: "1%" }}>Add to Cart</button>
                   
                   <Button>Buy Now</Button></div>
                   </Box>
               ))
           }
      </Container>
        </Div>
    )
}

const Container = styled.div`
display: grid;
background-color: #ffffff;
grid-template-columns: repeat(5, 18%);
grid-gap: 2%;
width: 100%;
margin-top: 5%;
`
const  Button = styled.button`
margin-left: 20%;
`
const Image = styled.img`
width : 100%;
`
const Box = styled.div`
:hover{
border-radius: 3px;
padding: 3px;
}


p {
  margin-top: -3px;   // change margin here...! 
}

  /* box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
; */
   
`
const Div = styled.div`
  display:flex;
  
  background-color: #ffffff;
  
`


const Filter = styled.div`
width: 25%;
margin-top: 5%;
margin-left:1%;
border: 1px solid black;
padding: 20px 0px 15px 25px;

 .dec {
  border: red solid 2px;
 }
`