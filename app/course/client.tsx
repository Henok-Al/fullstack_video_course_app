"use client";

import useBasket from "@/hooks/useBasket";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

type ClientProps = {
  user: User | null;
  courseId: string;
};

export default function Client({ courseId, user }: ClientProps) {
  const router = useRouter();

  const { hasBasket, toggleBasket } = useBasket({
    currentUser:user,
    courseId,
  });

  return (
    <div>
      <div className="flex flex-col gap-1 mt-4">
        <Button
          onClick={() =>
            user?.stripePurchasedId
              ? router.push(`/course/${courseId}/access`)
              : router.push(`/udemy-plus`)
          }
          className="py-3 text-center hover:bg-black hover:text-white rounded-none bg-purple-600 text-white"
        >
          {user?.stripePurchasedId ? "Go to course" : "Get course now"}
        </Button>
        <Button
          className="py-3 rounded-none bg-purple-600 text-white"
          onClick={toggleBasket}
          type="button"
        >{`${hasBasket ? "Remove from basket" : "Add to basket"}`}</Button>
        <p className="text-[12px] text-white text-center border-t-2 py-2">
          30 day money back guarantee
        </p>
      </div>
    </div>
  );
}
