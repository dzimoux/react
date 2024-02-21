import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../services/postService";
import {UserDetails} from "../components/UserDetails";

const UserDetailsPage = () => {
    const [usersDetails, setUsersDetails] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        userService.getAllbyId(id).then(({data}) => setUsersDetails(data))
    }, [id])

    return (
        <div>
            {usersDetails && <UserDetails key={usersDetails.id} userDetails={usersDetails}/>}
            <Outlet/>

        </div>
    );
};

export {UserDetailsPage};