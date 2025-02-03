"use client";

import { NBALogo } from "@/assets/Logos";
import { getNavigationRoutes, ROUTE_ACCOUNT, ROUTE_HOME } from "@/routes";
import { isActiveLink } from "@/utils/links";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ user }: { user: User | undefined }) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 px-8 py-4 flex-wrap">
      <div className="flex-1 flex justify-center sm:justify-start">
        <Link href={ROUTE_HOME} className="flex w-[48]">
          <NBALogo size={48} />
        </Link>
      </div>
      <ul className="flex gap-8 justify-center items-center flex-wrap">
        {getNavigationRoutes(Boolean(user)).map(route => (
          <li key={route.path}>
            <Link href={route.path}>
              <span
                className={`text-xs font-semibold uppercase ${
                  isActiveLink(pathname, route.path)
                    ? "text-slate-500"
                    : "text-black"
                } hover:text-slate-500`}
              >
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex-1 flex items-center justify-center sm:justify-end">
        {user && (
          <Link href={ROUTE_ACCOUNT}>
            <Image
              className="rounded-full"
              src={user.image || ""}
              alt={user.name || ""}
              width={32}
              height={32}
            />
          </Link>
        )}
      </div>
    </nav>
  );
}
