import React, {useEffect, useState} from 'react';
import {PostService} from "../services/PostService";
import {Todo} from "./Todo";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        PostService.getTodos().then(({data}) => setTodos(data))
    }, [])
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {TodoPage};