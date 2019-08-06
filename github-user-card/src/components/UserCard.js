import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const UserCard = ({user}) => {
    return (
  <Card>
    <Image src={user.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{user.name}</Card.Header>
      <Card.Meta>{user.login}</Card.Meta>      
      <Card.Meta>
        <span className='date'><i className="map pin icon"></i>{user.location}</span>
      </Card.Meta>
      <Card.Description>
       {user.bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {user.followers} followers
      </a>
    </Card.Content>
  </Card> 
    )
}


export default UserCard;

