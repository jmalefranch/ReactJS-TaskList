import React from 'react'
import FormTodo from "./FormTodo";
import Tasklist from "./Tasklist";
import Footer from "./Footer"
import Header from "./Header"
import { useState } from "react";

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    }
    return (
        <div>
            <Header/>
            <FormTodo handleAddItem={handleAddItem}/>
            <Tasklist list={list} setList={setList} />
            <Footer/>
        </div>
    )
}

export default Container
