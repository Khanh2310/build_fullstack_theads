import Cards from '@/components/cards/Cards';
import { getThread } from '@/lib/actions/thread.action';
import { getUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');
  const result = await getThread(1, 30);
  return (
    <div>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length == 0 ? (
          <p className="np-result">No threads found</p>
        ) : (
          <>
            {result &&
              result.posts.map((post) => (
                <Cards
                  key={post._id}
                  id={post._id}
                  currentUserId={user?.id}
                  parentId={post.parentId}
                  content={post.text}
                  author={post.author}
                  community={post.community}
                  createdAt={post.createAt}
                  commnents={post.children}
                />
              ))}
          </>
        )}
      </section>
    </div>
  );
}
