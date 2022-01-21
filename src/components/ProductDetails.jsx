import {useState,useEffect} from "react";

import { useParams } from "react-router-dom";

import styled from 'styled-components';

export const ProductDetails = () => {
    let {id} = useParams();

    const [data,setData] = useState({});

    const getData = async () => {
        let res = await fetch(` http://localhost:3001/prods/${id}`);
        let d = await res.json();
        setData(d);
        console.log(d);
    }
    useEffect(() => {
        getData();
    },[]);

    return (
        <Container>
            <Image src={data.image} alt=""/>
            <Box>
            <h1>{data.title}</h1>
            <p className="descr">{data.description}</p>
            <h2>{"Rs. "+ data.price}</h2>
                <p>
                {data.Category}</p>
                <div className="add_to_bag">
                <button>Add To Bag</button>
                <button className="wishlist">WISHLIST</button>
                </div>              
            </Box>
        </Container>
    )
}

const Container = styled.div`
width: 90%;
padding: 10px;
height: 600px;
display: grid;
grid-template-columns: 50% 50%;
text-align: left;
margin: auto;
margin-top: 100px;
border-radius: 10px;
box-shadow:3.4px 6.7px 6.7px hsl(0deg 0% 0% / 0.40);
background-color: #ffff;
border: 2px solid red;
`
const Image = styled.img`
width: 90%;
height: 600px;
box-shadow:3.4px 6.7px 6.7px hsl(0deg 0% 0% / 0.40);
`

const Box = styled.div`
text-align: left;
margin-left: 15px;

.descr{
/* color:#535665; */
font-family: Whitney;
font-size: 20px;
padding: 5px 20px 14px 0px;
margin-top: -15px;
}
.add_to_bag{
/* align-items:center;
background-color:#ff527b;
border-color:#ff3e6c;
border-radius:4px;
border-style:solid;
border-width:1px;
color:#ffffff;
display:flex;
flex-basis:0%;
font-weight:500;
justify-content:center;
margin:0px 14.725px 0px 0px;
padding:15px 0px;
text-align:center; */
}
.wishlist{
    /* align-items:
center;
background-color:
#ffffff;
border-color:
#535766;
border-radius:
4px;
border-style:
solid;
border-width:
1px;
color:
#282c3f;
display:
flex;
flex-basis:
0%;
font-weight:
500;
justify-content:
cente;
letter-spacing:
0.4px;
padding:
10px 0px;
text-align:
center; */
}
`
