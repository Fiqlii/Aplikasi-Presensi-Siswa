import React from 'react'

import {
  HomeIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  TableCellsIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/solid'

import {
  CNavItem,
} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <HomeIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Daftar Kelas',
    to: '/daftarKelas',
    icon: <BuildingOfficeIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Daftar Siswa',
    to: '/daftarSiswa',
    icon: <UserGroupIcon className="nav-icon text-blue-500"/>,
  },
  {
    component: CNavItem,
    name: 'Daftar Guru',
    to: '/daftarGuru',
    icon: <UserGroupIcon className="nav-icon text-blue-500"/>,
  },
  // {
  //   component: CNavItem,
  //   name: 'Rekap Absen',
  //   to: '/rekapAbsen',
  //   icon: <TableCellsIcon className="nav-icon text-blue-500"/>,
  // },
  {
    component: CNavItem,
    name: 'Sign Out',
    to: 'login',
    icon: <ArrowLeftStartOnRectangleIcon className="nav-icon text-blue-500"/>,
  },
]

export default _nav
