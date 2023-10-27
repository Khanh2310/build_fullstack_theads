import Profile from '@/components/shared/Profile';
import ThreadsInfo from '@/components/shared/ThreadsInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { profileTabs } from '@/constants';
import { getUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(params.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <>
      <Profile
        user_Id={userInfo._id}
        accountID={userInfo.id}
        followers={userInfo.followers}
        authUserID={user.id}
        name={userInfo.name}
        username={userInfo.username}
        bio={userInfo.bio}
        imgUrl={userInfo.image}
      />
      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {profileTabs.map((tabs) => (
              <TabsTrigger className="tab" key={tabs.label} value={tabs.value}>
                <Image
                  src={tabs.icon}
                  width={24}
                  height={24}
                  alt="icon"
                  className="object-cover"
                />
                <p className="max-sm:hidden">{tabs.label}</p>
                {tabs.label === 'Threads' && (
                  <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                    {userInfo?.threads?.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          {profileTabs.map((tabsInfor) => (
            <TabsContent
              key={`content-${tabsInfor.label}`}
              value={tabsInfor.value}
              className="w-full text-light-1"
            >
              <ThreadsInfo
                currentUserId={user.id}
                accountID={userInfo.id}
                accountType="User"
              ></ThreadsInfo>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Page;
