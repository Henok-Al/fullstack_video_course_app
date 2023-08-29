
import { prisma } from "@/lib/prisma"
import React from 'react'
import getUser from "@/actions/get-user"
import Image from "next/image";
import Client from "../client";


export default async function page({params}:{params:{id:string}}) {
  

  const user = await getUser();

  const courses = await prisma.course.findUnique({
    where: {
        id: params.id
    },
  })
  
 

  if(!courses) {
    throw new Error('')
  }
  
  return (
    <div>
        <div className="bg-zinc-900 text-white">
         <div className="h-[65vh]  flex justify-between items-center p-100 mx-10">
                <div className="flex flex-col gap-2">
                    <span className="text-purple-400 text-sm">{courses?.category}</span>

                    <div className="max-w-[700px] space-y-6">
                        <h1 className="text-4xl font-extrabold">{courses?.title}</h1>
                        <span className="text-neutral-500 font-semibold text-sm">{courses?.description}</span>
                        
                        <div className="space-x-4">
                            <span>{courses?.createdAt?.toLocaleString()}</span>
                            <span>{courses?.language}</span>
                        </div>
                    </div>
                </div>

              <div className="flex flex-col">
                      {courses?.images?.map((item) => (
                        <Image width={400} height={300} key={item} className="object-cover border-white border-4" src={item} alt="" />
                      ))}
                      <Client user={user} courseId={courses?.id || ''}/>
                </div>

            </div>
        </div>
    </div>
  )
}























// import { prisma } from "@/lib/prisma"
// import React from 'react'
// import getUser from "@/actions/get-user"
// import Image from "next/image";
// import Client from "../client";


 
// export default async function page({params}:{params:{id:string}}) {
  

//   const user = await getUser();

//   const courses = await prisma.course.findUnique({
//     where: {
//         id: params.id
//     },
//   })
  
 

//   if(!courses) {
//     throw new Error('No course found under this Id')
//   }

//   return (
//     <div>
//         <div className="bg-zinc-900 text-white">
//          <div className="h-[55vh]  flex justify-between items-center m-5  py-8">
//                 <div className="flex flex-col gap-2">
//                     <span className="text-purple-400 text-sm">{courses?.category}</span>

//                     <div className="max-w-[700px] space-y-6">
//                         <h1 className="text-4xl font-extrabold">{courses?.title}</h1>
//                         <span className="text-neutral-500 font-semibold text-sm">{courses?.description}</span>
                         
//                         <div className="space-x-4">
//                             <span>{courses?.createdAt?.toLocaleString()}</span>
//                             <span>{courses?.language}</span>
//                         </div>
//                     </div>
//                 </div>

//               <div className="flex flex- mt-4">
//                       {courses.images.map((item) => (
//                         <Image width={400} height={300} key={item} className="object-cover border-white border-4" src={item} alt="" />
//                       ))}
//                       <Client currentUser={user} courseId={courses?.id || ''}/>
//                 </div>
//               {/* <div className="flex flex-col">
//                       {courses?.images?.map((item) => (
//                         <Image width={400} height={300} key={item} className="object-cover border-white border-4" src={item} alt="" />
//                       ))}
//                       <Client currentUser={user} courseId={courses?.id || ''}/>
//                 </div> */}

//             </div>
//         </div>
//     </div>
//   )
// }


