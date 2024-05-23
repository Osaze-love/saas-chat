import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio ratio={16 / 9} className="flex items-center">
          <h1 className="dark:text-white font-bold text-2xl">ChatWithAnyone</h1>
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
