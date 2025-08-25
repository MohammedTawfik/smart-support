'use client';

import { useQuery } from 'convex/react';
import { api } from '@workspace/backend/_generated/api';

export default function Page() {
  const users = useQuery(api.users.getAllUsers);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello App</h1>
        {users && users.length === 0 && <div>No users</div>}
        {users?.map((user) => (
          <div key={user._id}>{user.name}</div>
        ))}
      </div>
    </div>
  )
}
