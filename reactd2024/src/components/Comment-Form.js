import React from 'react';
import {useForm} from "react-hook-form";
import {postService} from "../services/Post-service";


const CommentForm = ({setComment}) => {

      const  {reset, register, handleSubmit} = useForm();
const save =(comment)=>{
   postService.create(comment).then(({data}) => setComment(prev=>([...prev,data]))  )
}

    return (
        <form onSubmit={handleSubmit(save)}>
<input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <input type='text' placeholder={'comment'} {...register('comment')}/>
            <button>Save</button>
        </form>
    );
};

export {CommentForm};