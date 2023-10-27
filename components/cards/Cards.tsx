import Image from 'next/image';
import Link from 'next/link';
import iconHeart from '../../public/assets/heart-gray.svg';
import iconReply from '../../public/assets/reply.svg';
import iconReport from '../../public/assets/repost.svg';
import iconShare from '../../public/assets/share.svg';
import { formatDateString } from '@/lib/utils';

interface Props {
  id: string;
  currentUserId: string;
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
  createdAt: string;
  commnents: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

function Cards({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  commnents,
  isComment,
}: Props) {
  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? 'px-0 xs:px-7' : 'bg-dark-2 p-7'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="user_community_image"
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

            <div className={`${isComment && 'mb-10'} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-3.5">
                <Image
                  src={iconHeart}
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src={iconReply}
                    alt="heart"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  src={iconReport}
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain "
                />
                <Image
                  src={iconShare}
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
              </div>

              {isComment && commnents.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {commnents.length} repl{commnents.length > 1 ? 'ies' : 'y'}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isComment && commnents.length > 0 && (
        <div className="ml-1 mt-3 flex items-center gap-2">
          {commnents.slice(0, 3).map((commnents, index) => (
            <Image
              key={index}
              src={commnents.author.image}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${index !== 0 && '-ml-5'} rounded-full object-cover`}
            />
          ))}

          <Link href={`/thread/${id}`}>
            <p className="mt-1 text-subtle-medium text-gray-1">
              {commnents.length} repl{commnents.length > 1 ? 'ies' : 'y'}
            </p>
          </Link>
        </div>
      )}
    </article>
  );
}

export default Cards;
