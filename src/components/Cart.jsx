import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cart =()=> {
  const [list, setList] = useState( [] );
  const [price, setPrice] = useState();
  let sum = 0;
   sum = list.map(item => +item.price)
        .reduce( ( prev, curr ) => prev + curr, 0 );
        // 
        console.log( sum , "sum" )
 
 
  const setDelete = async () => {
      let res = await fetch(" http://localhost:3001/bag");
        let d = await res.json();
  //  console.log(d)
   console.log("clicked")
  //  const JavaScriptApplicants = d.filter(e => e.gender.includes(event.target.value));
  //  setList(JavaScriptApplicants)
  
  }
  useEffect(() => {
    fetchData();
  }, [sum] );
  
        
        // 

  const fetchData = () => {
    fetch("http://localhost:3001/bag")
      .then((d) => d.json())
      .then((res) => {
        setList( res );
       
setPrice(sum)
        // setPrice(list.reduce())
      });

   
  };
  // console.log( list );

  const orderConfirm = () => {

  }
   
  
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  
    margin:5%;
    `;

  const Img = styled.div`
    display: flex;
   

    img {
      width:100px;
      
      margin-top: 2%
    }

   

  `

  const Con = styled.div`
  display: flex;
  margin-top: 3%;
    background-color: whitesmoke;
    width: 500px;
  flex-direction: column;

   h2 {
      margin-top:7%;
      width: 100%;
      margin-left: 50px;
      color: black
    }

    button {
      width: 100px;
      margin-left: 10%;
      height: 30px;
      /* margin-top: -20px */
    }
  `

  const Payment = styled.div`
  border: 1px solid red;
  margin:10px;
  margin-right: 10%;
  margin-top: 6.5%;
  width: 100%;

  button {
    margin-left: 5px;
    height: 30px;
  }
  `

  const Div1 = styled.div`
    display: flex;
    flex-direction: row;
  `
  console.log( "list", list )

   const handlePageChange = () => {
    window.location.href = "#/donmde";
  }

  return (
    <Div1>
      <Div>
        {list.map((e) => (
          <div key={e.product_id}>
          
              <Img>
            <img src={e.image} alt="imgs" />
            
              <Con>
              <h2>{e.title}</h2>

                <h2> Rs. {e.price}</h2>

                </Con>
              
            </Img>
            
         
         
          </div>
        ) )}
         
      </Div>

     <Payment>
        <div>
          <h2>Total Price: {price} </h2>
          <Link to="/done" >
            <button>
              confirm order
            </button>
          </Link>
          {/* <button onClick={handlePageChange}>Confirm Order </button> */}
            </div>
      </Payment>
    </Div1>
  );
}


