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
  return (
    <section className="relative">
      <div>
        <Cards
          key={thread._id}
          id={thread._id}
          currentUserId={thread?.id}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createAt}
          commnents={thread.children}
        />

        <div className="mt-7">
          <Comments
            threadId={thread.id}
            currentUserImg={userInfor.image}
            currentUserId={JSON.stringify(userInfor._id)}
          />
        </div>

        <div className="mt-10">
          {thread.children.map((childrenItem: any) => (
            <Cards
              key={childrenItem._id}
              id={childrenItem._id}
              currentUserId={childrenItem?.id}
              parentId={childrenItem.parentId}
              content={childrenItem.text}
              author={childrenItem.author}
              community={childrenItem.community}
              createdAt={childrenItem.createAt}
              commnents={childrenItem.children}
              isComment
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
