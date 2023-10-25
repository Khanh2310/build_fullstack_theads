import Profile from '@/components/shared/Profile';
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
        accountID={userInfo.id}
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
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default Page;
