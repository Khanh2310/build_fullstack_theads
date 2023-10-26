import UserCard from '@/components/cards/UserCard';
import { Input } from '@/components/ui/input';
import { getUser, searchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';
interface Props {
  userId: string;
  searchString: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
}
const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(user.id);
  if (!userInfo) redirect('/');

  const results = await searchUser({
    userId: user.id,
    searchString: '',
    pageNumber: 1,
    pageSize: 20,
  });
  console.log(results);
  return (
    <div>
      <Input placeholder="Search..."></Input>
      <div className="mt-14 flex flex-col gap-9">
        {results.users.length === 0 ? (
          <p className="no-result">No users</p>
        ) : (
          <>
            {results.users.map((person: any) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
