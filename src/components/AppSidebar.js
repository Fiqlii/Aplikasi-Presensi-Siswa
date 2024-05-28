import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'
import  logo  from 'src/assets/images/logo.png'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigationKesiswaan from '../_nav'
import navigationSiswa from '../_navSiswa'
import navigationWaliKelas from '../_navWaliKelas'

const AppSidebar = () => {
  const [checkLogin, SetCheckLogin] = useState('')
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="light"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="justify-content-center align-items-center ml-lg-1 border-bottom">
        <CSidebarBrand to="/">
          {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '1rem'}}> */}
            <img src={logo} alt="Logo" height={32} width={32}/>
          {/*     </div> */}
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      {checkLogin == 'siswa' ?
      <AppSidebarNav items={navigationSiswa} />
      : checkLogin == "walikelas" ?
      <AppSidebarNav items={navigationWaliKelas} />
      :
      <AppSidebarNav items={navigationKesiswaan} />
      }
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
