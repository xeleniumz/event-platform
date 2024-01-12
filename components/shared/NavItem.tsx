'use client';

import { headerLinks } from '@/constants'
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export const NavItem = () => {
    const pathname = usePathname()
    return (
        <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
            {headerLinks.map((link) => {
                return (
                    <li
                        key={link.route}
                        className={clsx('flex-center p-medium-16 whitespace-nowrap', {
                            'text-primary-500': pathname === link.route
                        })}
                    >
                    <Link href={link.route}>{link.label}</Link>
                </li>
                )
            })}
        </ul>
    )
}
