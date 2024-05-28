import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  // cilNote,
  cilCog,
  cilHome,
  cilNotes,
  cilGroup,
  cilList,
  cilAccountLogout,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Daftar Kelas',
    to: '/Kelas',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Daftar Guru',
    to: '/daftarGuru',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rekap Absen',
    to: '/rekapAbsen',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sign Out',
    to: 'login',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
