import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Cart =()=> {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://localhost:3001/bag")
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  console.log( list );
  
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    margin-left: 5%;
    
    
    div {
      width: 100%;
      margin-top: 20%;
      height: 460px;
      color: gray.400;
    box-shadow:3.4px 6.7px 6.7px hsl(0deg 0% 0% / 0.40);
    }
  
    div img {
      width:10%;
      // height: 70%;
    }
    
    div p {
      // margin-top: -28%;
      margin-left: 2%;
    }
    div h5 {
      height: 80px;
      margin-left: 2%;
    }
   
    div button {
      margin-left: 2%;
    }
  `;
  console.log("list",list)
  return (
    <div>
      <Div>
        {list.map((e) => (
          <div key={e.product_id}>

              <img src={e.image} alt="imgs" />
              <h2>{e.title}</h2>
            <h1>{e.price}</h1>
            {/* <button> Confirm Order</button> */}
         
          </div>
        ))}
      </Div>
    </div>
  );
}


