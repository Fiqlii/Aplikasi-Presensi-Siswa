import React from 'react'
import CIcon from '@coreui/icons-react'
// import classNames from 'classnames'

import {
  CCard,
  CCardTitle,
  CButton,
  CTable,
  CCardBody,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

import {
  cilEyedropper,
} from '@coreui/icons';

const DaftarSiswa = () => {
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
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIS</CTableHeaderCell>
                <CTableHeaderCell scope="col">Kelas</CTableHeaderCell>
                <CTableHeaderCell scope="col">No Orang Tua</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Asep Sunandar</CTableDataCell>
                <CTableDataCell>12345678</CTableDataCell>
                <CTableDataCell>211511033</CTableDataCell>
                <CTableDataCell>VII A</CTableDataCell>
                <CTableDataCell>081324950796</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Agus Hermawan</CTableDataCell>
                <CTableDataCell>87654321</CTableDataCell>
                <CTableDataCell>2115110345</CTableDataCell>
                <CTableDataCell>VII C</CTableDataCell>
                <CTableDataCell>081324978456</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Asep Sunandar</CTableDataCell>
                <CTableDataCell>43215678</CTableDataCell>
                <CTableDataCell>2115110339</CTableDataCell>
                <CTableDataCell>VII F</CTableDataCell>
                <CTableDataCell>08133378456</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Agisti Rahmawati</CTableDataCell>
                <CTableDataCell>812348765</CTableDataCell>
                <CTableDataCell>2115110342</CTableDataCell>
                <CTableDataCell>VII B</CTableDataCell>
                <CTableDataCell>081324978456</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
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

export default DaftarSiswa