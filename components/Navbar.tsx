"use client";

import { NBALogo } from "@/assets/Logos";
import { navigationRoutes, ROUTE_HOME } from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex px-8 py-4">
      <div className="flex-1">
        <Link href={ROUTE_HOME} className="flex w-[48]">
          <NBALogo size={48} />
        </Link>
      </div>
      <ul className="flex gap-8 justify-center items-center">
        {navigationRoutes.map(route => (
          <li key={route.path}>
            <Link href={route.path}>
              <span
                className={`text-xs font-semibold uppercase ${
                  pathname === route.path ? "text-slate-500" : "text-black"
                } hover:text-slate-500`}
              >
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex-1"></div>
    </nav>
  );
}
