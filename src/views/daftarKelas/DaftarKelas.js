import React, { useState } from 'react'
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
  CPagination,
  CPaginationItem,
  CForm,
  CFormInput,
  CRow,
  // CSmartPagination,
} from '@coreui/react'

// import { CIcon } from '@coreui/icons-react';
import {
  cilCog,
} from '@coreui/icons';

const DaftarKelas = () => {

  const [entries, setEntries] = useState(10);

  return (
    <>
      <CCard className="py-4 px-3">
        <CCardBody>
          <CRow xs={{ gutter: 2 }}>
            <CCardTitle className="d-flex justify-content-between">
              <h3 style={{ fontWeight: 'bold' }}>Daftar Kelas</h3>
              <CButton
                color="primary"
                shape="rounded-pill"
              >
                Tambah Data Kelas
              </CButton>
            </CCardTitle>
            <CCardTitle className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                Show
                <CForm className="mx-2">
                  <CFormInput
                    type="number"
                    id="entries"
                    defaultValue={entries}
                    onChange={(e) => setEntries(e.target.value)}
                    style={{ width: '70px' }}
                  />
                </CForm>
                Entries
              </div>
              <div className="d-flex align-items-center">
                Search
                <CForm className="mx-2">
                  <CFormInput
                    type="search"
                    id="SearchData"
                  />
                </CForm>
              </div>
            </CCardTitle>
          </CRow>
          <CTable className="px-5 mt-3">
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
                <CTableHeaderCell scope="row">6</CTableHeaderCell>
                <CTableDataCell>VII F</CTableDataCell>
                <CTableDataCell>Endang Sukanti</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <CIcon icon={cilCog} customClassName="nav-icon" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CPagination align="end" aria-label="Page navigation example" className="mt-4">
            <CPaginationItem disabled>Previous</CPaginationItem>
            <CPaginationItem>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem>Next</CPaginationItem>
          </CPagination>
        </CCardBody>
      </CCard>
    </>
  )
}

export default DaftarKelas
