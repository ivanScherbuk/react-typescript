import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const UserList: React.FC = () => {
  const { users, error, loading, page, limit } = useTypedSelector(state => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers(page, limit);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users?.map(user => {
        return <div key={user.id}>{`${user.firstName} ${user.lastName}`}</div>
      })}
    </div>
  )
}

export default UserList;
