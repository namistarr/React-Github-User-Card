import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
    return (
        <div className='userlist'>
        {props.userData.map((user, index) => {
            return (
                <UserCard user={user} key={index} />
            )
        })}
        </div>
    )
}


export default UserList;