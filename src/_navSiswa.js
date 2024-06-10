import React from 'react'

import {
  HomeIcon,
  TableCellsIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/solid'

import {
  CNavItem,
} from '@coreui/react'

const _navSiswa = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <HomeIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Absen',
    href: '#',
    icon: <TableCellsIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Sign Out',
    href: '#',
    icon: <ArrowLeftStartOnRectangleIcon className="nav-icon text-blue-500"/>,
  },
]

export default _navSiswa
