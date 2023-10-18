"use client";
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logout from "../../public/assets/logout.svg";

import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";
const LeftSideBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sideBarLinks &&
          sideBarLinks.length > 0 &&
          sideBarLinks.map((link) => {
            const isActive =
              (pathName.includes(link.route) && link.route.length > 1) ||
              pathName === link.route;
            return (
              <Link
                href={link.route}
                className={`${isActive && "bg-primary-500"} leftsidebar_link`}
                key={link.label}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            );
          })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image src={Logout} width={24} height={24} alt="logout" />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSideBar;
