'use client';
import User from '@/lib/models/user.model';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { followUnFollowUser } from '@/lib/actions/user.actions';
interface PropsProfile {
  accountID: string;
  authUserID: string;
  name: string;
  username: string;
  followers: any;
  bio: string;
  user_Id: string;
  imgUrl: string;
}
const Profile = ({
  accountID,
  authUserID,
  name,
  username,
  user_Id,
  bio,
  followers,
  imgUrl,
}: PropsProfile) => {
  const [following, setFollowing] = useState(followers.includes(user_Id));
  const handleFollow = async () => {
    await followUnFollowUser(user_Id);
    setFollowing(!following);
  };
  return (
    <div className="w-full flex flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 ">
          <div className="relative object-cover ">
            <Image
              src={imgUrl}
              alt="profile-image"
              width={80}
              height={80}
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1 mb-1">@{username}</p>
          </div>
        </div>
      </div>
      <p className="mt-6 max-w-lg text-base-regular text-light-2">{bio}</p>
      <p className="mt-6 max-w-lg text-base-regular text-gray-1">
        {followers.length} followers
      </p>
      {authUserID === accountID ? (
        ''
      ) : (
        <div className="mt-14">
          <Button className="text-white w-full" onClick={handleFollow}>
            {following ? 'Following' : 'Follow'}
          </Button>
        </div>
      )}

      <div className="mt-12 h-0.5 w-full bg-dark-3" />
    </div>
  );
};

export default Profile;
