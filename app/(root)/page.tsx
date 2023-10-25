import Cards from '@/components/cards/Cards';
import { getThread } from '@/lib/actions/thread.action';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const result = await getThread(1, 30);
  const user = await currentUser();
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
                  createAt={post.createAt}
                  commnents={post.children}
                />
              ))}
          </>
        )}
      </section>
    </div>
  );
}
