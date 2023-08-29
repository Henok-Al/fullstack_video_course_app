import SingleCourseView from "@/components/create-course/single-course";
import { prisma } from "@/lib/prisma";

export default async function Home() {

  const courses = await prisma.course.findMany({});

  return (
    <main>
      <div className="grid grid-cols-3 gap-3 container py-12">
      {courses.map((item) => (
        <SingleCourseView
        title={item.title}
        id={item.id}
        key={item.id}
        item={item}
        option={item.option}
         />
      ))}
      </div>
    </main>
  );
}
