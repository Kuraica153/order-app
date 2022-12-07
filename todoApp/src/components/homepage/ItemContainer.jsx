import Item from "./Item";

import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getItems, deleteItem } from "../../helpers/items";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const ItemContainer = () => {
    
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Cobijita",
            description: "Cobijita de lana",
            createdAt: "2021-10-10"
        }
    ]);

    useEffect(() => {
        socket.on('newOrder', (order) => {
            let newItem = {
                id: order._id,
                title: order.name,
                description: order.description,
                createdAt: order.createdAt
            }
            getItems().then( (item) => {
                setItems(item);
            });
        });

        getItems().then( (item) => {
            setItems(item);
        });
    }, [])
    

    const handleDelete = async (e) => {
        e.preventDefault();
        const id = e.currentTarget.value;
        const response = await deleteItem(id);
        console.log(response);
        if(response !== 200)
            return;
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        console.log(newItems);
    };
    
    return (
        <>
        {
            items.map( ( item ) => ( 
                <Item key={ item.id } { ...item } handleDelete={handleDelete} />
            ))
        }
        </>
    )
}
