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
            <h1>{data.title}</h1><br/>
            <p className="descr">{data.description}</p>
            <p className="rating">{"Rating "+data.rating}</p>
            <h2>{"Rs. "+ data.price}</h2>
                <p>{data.Category}</p>
                <br/><br/><br/>
                <div className="bag_wishlist">
                <div className="add_to_bag">
                    <button>ADD TO BAG</button>
                    </div>
                <div className="wishlist">
                <button>WISHLIST</button>
                </div>
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
width: 82%;
height: 600px;
box-shadow:3.4px 6.7px 6.7px hsl(0deg 0% 0% / 0.40);
`

const Box = styled.div`
text-align: left;
margin-left: 15px;
.rating{
    margin-top: -10px;
}
.descr{
/* color:#535665; */
font-family: Whitney;
font-size: 20px;
padding: 5px 20px 14px 0px;
margin-top: -15px;
}
.bag_wishlist{
    display: flex;
    /* border: red solid 2px; */
    height: 70px;
}
.add_to_bag{
width    :30% ;
background-color:#ff527b;
border-radius:4px;
color:#ffffff;
justify-content:center;
padding:15px;
text-align:center;
}
.wishlist{
margin-left: 10%;
width: 30% ;
color:black;
background-color:#ff527b;
border-color:#535766;
border-radius:4px;
border-style:solid;
border-width:1px;
padding:10px;
text-align:center;
}
`
