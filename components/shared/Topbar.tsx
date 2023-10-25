'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/assets/logothreads.svg';
import Logout from '../../public/assets/logout.svg';
import { dark } from '@clerk/themes';
import { SignOutButton, SignedIn, OrganizationSwitcher } from '@clerk/nextjs';

const Topbar = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4 ">
        <Image src={Logo} width={50} height={50} alt="logo" />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">NextJS</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src={Logout} width={24} height={24} alt="logout" />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: 'py-2 px-4',
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
