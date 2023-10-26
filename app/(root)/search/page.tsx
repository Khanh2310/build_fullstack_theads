import UserCard from "@/components/cards/UserCard";
import { Input } from "@/components/ui/input";
import { getUser, searchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Searchbar from "../../../components/shared/Search";
import Pagination from "@/components/shared/Pagination";
interface Props {
  userId: string;
  searchString: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
}
const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const results = await searchUser({
    userId: user.id,
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 25,
  });
  return (
    <section>
      <Searchbar routeType="search" />
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
      <Pagination
        path="search"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={results.isNext}
      />
    </section>
  );
};

export default Page;
