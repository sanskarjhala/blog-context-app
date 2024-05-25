import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';

const Blogs = () => {

    const {loading , posts} = useContext(AppContext);
  return (
    <div className='w-11/12 md:max-w-[670px] xs:max-w-[513px] h-screen py-14 flex flex-col gap-y-7 mt-32 mb-36 xs:m-[26rem]  justify-center items-center'>
        <div className="mt-" >
        {
            loading ? (<Spinner/>) :
            (
                posts.length === 0 ? (
                    <div>
                        <p>
                            No Post Found
                        </p>
                    </div>
                ) : 
                (
                    posts.map( (post) => (
                        <div key={post.id} className=''>
                            <p className='font-bold text-xs'>{post.title}</p>
                            <p className='text-[10px]'> By <span className="italic">{post.author}</span> On <span className="underline font-bold">{post.category} </span> </p>
                            <p className='text-[10px]'>Posted on {post.date} </p>
                            <p className='text-[12px] py-2'>{post.content}</p>
                            <div>
                                {
                                    post.tags.map((tag , index) => {
                                        return <span key={index} 
                                        className='text-[11px] text-blue-600'>{`  #${tag}`}</span>
                                })
                                }
                            </div>
                        </div>
                    ))
                )
            )
        }
    </div>
    </div>
  )
}

export default Blogs