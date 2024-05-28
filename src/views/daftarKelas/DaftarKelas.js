import React from 'react'
import CIcon from '@coreui/icons-react'
// import classNames from 'classnames'

import {
  CCard,
  // CCardHeader,
  CCardTitle,
  // CCardText,
  CButton,
  CTable,
  CCardBody,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

// import { CIcon } from '@coreui/icons-react';
import {
  cilShieldAlt,
  cilCog,
} from '@coreui/icons';

const DaftarKelas = () => {
  return (
    <>
      <CCard>
        {/* <CCardHeader>Header</CCardHeader> */}
        <CCardBody>
          <CCardTitle>Daftar Kelas</CCardTitle>
          <CTable>
            <CTableHead color="primary">
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Kelas</CTableHeaderCell>
                <CTableHeaderCell scope="col">Wali Kelas</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>VII A</CTableDataCell>
                <CTableDataCell>Asep Sunandar</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>VII B</CTableDataCell>
                <CTableDataCell>Dang Iyun</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>VII C</CTableDataCell>
                <CTableDataCell>Sri Wahyuni</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">4</CTableHeaderCell>
                <CTableDataCell>VII D</CTableDataCell>
                <CTableDataCell>Tuti</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">5</CTableHeaderCell>
                <CTableDataCell>VII E</CTableDataCell>
                <CTableDataCell>Sri Wahyuni</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">5</CTableHeaderCell>
                <CTableDataCell>VII F</CTableDataCell>
                <CTableDataCell>Endang Sukanti</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">6</CTableHeaderCell>
                <CTableDataCell>VII G</CTableDataCell>
                <CTableDataCell>Suratno</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">7</CTableHeaderCell>
                <CTableDataCell>VII H</CTableDataCell>
                <CTableDataCell>Asep</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">8</CTableHeaderCell>
                <CTableDataCell>VII I</CTableDataCell>
                <CTableDataCell>Dadang Kardus</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">9</CTableHeaderCell>
                <CTableDataCell>VIII A</CTableDataCell>
                <CTableDataCell>Tri Sucipto</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default DaftarKelas
