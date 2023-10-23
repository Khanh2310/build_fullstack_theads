import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { getUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { getThreadById } from '@/lib/actions/thread.action';
import Cards from '@/components/cards/Cards';
import Comments from '@/components/forms/Comments';
const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  const user = await currentUser();
  if (!user) return null;
  const userInfor = await getUser(user.id);
  if (!userInfor?.onboarded) redirect('/onboarding');
  const thread = await getThreadById(params.id);
  console.log('abc', thread);
  return (
    <section className="relative">
      <div className="">
        <Cards
          key={thread._id}
          id={thread._id}
          currentUserId={thread?.id}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createAt={thread.createAt}
          commnents={thread.children}
        />

        <div className="mt-7">
          <Comments
            threadId={thread.id}
            currentUserImg={user.imageUrl}
            currentUserId={JSON.stringify(userInfor._id)}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
