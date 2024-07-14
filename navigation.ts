import {createSharedPathnamesNavigation} from 'next-intl/navigation';

const locales = ['ar', 'en'];

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation({locales});