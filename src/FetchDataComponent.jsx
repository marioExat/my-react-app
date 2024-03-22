import { useState, useEffect } from "react";
import axios from 'axios';
import Person from "./Person";

const FetchDataComponent = () => {
    const[title, setTitle] = useState('');
    const client = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/todos/1'
    });

    useEffect(() => {
        getData();
    }, []);

    // Fetching data using Fetch API
    // let getData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const task = await response.json();
    //     console.log(task);
    //     setTitle(task.title);
    // };

    // Fetching Data using axios
    let getData = async () => { 
        client
            .get()
            .then(response => {
                setTitle(response.data.title)
            })        
    }

    return (
    <>
        <h1>Fetch Component</h1>
        <h2>{title}</h2>
        <Person name="Sara"/>
    </>);
}

export default FetchDataComponent;