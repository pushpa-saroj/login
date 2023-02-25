import React,{useState} from "react";
import {questions} from "./Api"
import MyAccordion from "./MyAccordion";
 function Accordion(){
    const[data,setData]=useState(questions)
    return (
        <>
        {data.map((curEle)=> {
            const {id}=curEle
            return<MyAccordion key={id}{...curEle}/>

        }
        )}
        <h1>hello</h1></>
    )
    }
    export default Accordion;