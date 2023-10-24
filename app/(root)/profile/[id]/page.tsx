import { getUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async ({ profileInfor }: { profileInfor: { id: string } }) => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(profileInfor.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  return <section className="text-light-1">Profile</section>;
};

export default Page;
