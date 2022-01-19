// import { styled } from "@chakra-ui/react"
import styled from 'styled-components';
import {jacketProduct} from '../Datas/jacket'
export function Product (){
    return(
        <JacketProductStyle>
            {
                jacketProduct.map((item1)=>{
                    return <div>
                        <div>
                        <img src={item1.pic}alt=""/>
                        </div>
                        <p>{item1.heading}</p>
                        <p>{item1.discreption}</p>
                        <h3>{item1.price}</h3>
                    </div>
                })
            }
        </JacketProductStyle>
    )
}
const JacketProductStyle = styled.div`
display: grid;
grid-template-columns: repeat(5,5fr);
grid-gap: 10px;
`
