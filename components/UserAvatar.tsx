import Image from "next/image";
import { cn } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null;
  className?: string | null;
}) => {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={name || ""}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black bg-black text-white text-lg font-semibold"
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
