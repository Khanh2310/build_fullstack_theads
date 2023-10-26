import { getUserPost } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import React from 'react';
import Cards from '../cards/Cards';

interface PropsThreadsInfor {
  currentUserId: string;
  accountID: string;
  accountType: string;
}
const ThreadsInfo = async ({
  currentUserId,
  accountID,
  accountType,
}: PropsThreadsInfor) => {
  let result = await getUserPost(accountID);
  if (!result) redirect('/');
  return (
    <section className="flex gap-10 flex-col mt-9">
      {result.threads.length > 0 ? (
        result.threads.map((item: any) => (
          <Cards
            key={item._id}
            id={item._id}
            currentUserId={currentUserId}
            parentId={item.parentId}
            content={item.text}
            author={
              accountType === 'User'
                ? { name: result.name, image: result.image, id: result.id }
                : {
                    name: item.author.name,
                    image: item.author.image,
                    id: item.author.id,
                  }
            }
            community={item.community}
            createAt={item.createAt}
            commnents={item.children}
          />
        ))
      ) : (
        <p className="text-center text-light-1">
          You haven't posted any threads yet.
        </p>
      )}
    </section>
  );
};

export default ThreadsInfo;
