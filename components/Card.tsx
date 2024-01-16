'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BiLike } from 'react-icons/bi';
import { FiMessageSquare } from 'react-icons/fi';

export default function Card({ post, page, key }) {
  // console.log(post);
  return (
    <Link href={`/feed/${post.slug}`} key={key} className=''>
      <article className='bg-gray-950 rounded-2xl p-5 border border-gray-800'>
        {/** user info  */}
        <div className='flex gap-3 justify-start items-center'>
          <div className='w-10'>
            <Image
              src={post?.user?.image}
              width={40}
              height={40}
              alt='user-image'
              className='w-full object-cover rounded-full'
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-sm'>
              {post?.user?.name} {` `}
              <span className='bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text text-sm font-bold ml-4'>
                Follow
              </span>
            </h2>
            <p className='text-gray-400 text-sm'>
              hossain.th00@gmail.com 👉
              <span className='text-sm'>
                {new Date(post.createdAt).toDateString()}
              </span>
            </p>
          </div>
        </div>
        {/** post content */}
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
          <div className='grow max-w-lg md:h-28 overflow-y-hidden'>
            <h2 className='text-xl md:mb-2'>{post.title}</h2>
            <p className='text-gray-400 text-base hidden md:block'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              temporibus! Eaque pariatur voluptates nemo unde! Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Exercitationem quis. Lorem
            </p>
          </div>
          <div className='w-full'>
            <Image
              src='/desk.webp'
              alt='article-image'
              width='200'
              height='96'
              className='md:h-28 object-cover w-full rounded-lg'
            />
          </div>
        </div>
        <div className='flex justify-between items-center mt-5 text-sm'>
          {/** likes */}
          <div className='flex justify-start gap-10'>
            <div className='flex flex-row items-center gap-2'>
              <BiLike size={20} />
              <span>100</span>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <FiMessageSquare size={20} />
              <span>{post?.comments?.length}</span>
            </div>
          </div>

          {/** tags */}
          <div className='flex gap-3'>
            <span>#javascript</span>
            <span>#webdev</span>
            <span>#frontend</span>
            <span>#react</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
