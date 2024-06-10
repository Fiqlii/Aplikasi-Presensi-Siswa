import React from 'react'

import {
  HomeIcon,
  UserGroupIcon,
  ArrowLeftStartOnRectangleIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/solid'

import {
  CNavItem,
} from '@coreui/react'

const _navWaliKelas = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <HomeIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Daftar Siswa',
    href: '#',
    icon: <UserGroupIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Upload Surat Sakit',
    href: '#',
    icon: <DocumentPlusIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Sign Out',
    href: '#',
    icon: <ArrowLeftStartOnRectangleIcon className="nav-icon text-blue-500"/>,
  },
]

export default _navWaliKelas
