import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import iconHeart from '../../public/assets/heart-gray.svg';
import iconReply from '../../public/assets/reply.svg';
import iconReport from '../../public/assets/repost.svg';
import iconShare from '../../public/assets/share.svg';
interface Props {
  id: string;
  currentUserId: string | undefined;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createAt: string;
  commnents: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}
const Cards = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createAt,
  commnents,
  isComment,
}: Props) => {
  return (
    <article
      className={`flex w-full flex-col rounded-xl  ${
        isComment ? 'px-0 xs:p-7' : 'bg-dark-2 p-7'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-1 w-full flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="Profile image"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>
            <div className="thread-card_bar" />
          </div>
          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">{content}</p>
            <div className="mt-5 flex flex-col gap-3 ">
              <div className="gap-3.5 flex">
                <Image
                  src={iconHeart}
                  width={24}
                  height={24}
                  alt="icon-heart"
                  className="cursor-pointer object-contain"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src={iconReply}
                    width={24}
                    height={24}
                    alt="icon-heart"
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  src={iconReport}
                  width={24}
                  height={24}
                  alt="icon-heart"
                  className="cursor-pointer object-contain"
                />
                <Image
                  src={iconShare}
                  width={24}
                  height={24}
                  alt="icon-heart"
                  className="cursor-pointer object-contain"
                />
              </div>
              {isComment && commnents.length > 0 && (
                <Link href={`/thread${id}`}>
                  <p className="text-subtle-medium mt-1 text-gray-1">
                    {commnents.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cards;
