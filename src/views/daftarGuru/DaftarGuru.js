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
  cilTrash,
} from '@coreui/icons';

const DaftarGuru = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CCardTitle>Daftar Nama Guru</CCardTitle>
          <CTable>
            <CTableHead color="primary">
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                <CTableHeaderCell scope="col">Wali Kelas</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Asep Sunandar</CTableDataCell>
                <CTableDataCell>202323745</CTableDataCell>
                <CTableDataCell>12345678</CTableDataCell>
                <CTableDataCell>VII A</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between" style={{ width: '45%' }}>
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilTrash} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Agus Hermawan</CTableDataCell>
                <CTableDataCell>2115110345</CTableDataCell>
                <CTableDataCell>87654321</CTableDataCell>
                <CTableDataCell>VII C</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between" style={{ width: '45%' }}>
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilTrash} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Asep Sunandar</CTableDataCell>
                <CTableDataCell>2115110339</CTableDataCell>
                <CTableDataCell>43215678</CTableDataCell>
                <CTableDataCell>VII F</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between" style={{ width: '45%' }}>
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilTrash} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Agisti Rahmawati</CTableDataCell>
                <CTableDataCell>2115110342</CTableDataCell>
                <CTableDataCell>812348765</CTableDataCell>
                <CTableDataCell>VII B</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between" style={{ width: '45%' }}>
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilEyedropper} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <CIcon icon={cilTrash} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default DaftarGuru
