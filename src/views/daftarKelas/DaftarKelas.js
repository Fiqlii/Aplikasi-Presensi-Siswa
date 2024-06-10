import React, { useState } from 'react'

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
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'

import {
  EyeIcon,
} from '@heroicons/react/24/solid'

const DaftarKelas = () => {

  const [entries, setEntries] = useState(10);

  return (
    <>
    <div className='container-lg px-4 px-3'>
      <CBreadcrumb className='breadcrumb mb-4'>
        <CBreadcrumbItem href="#/dashboard">Dashboard</CBreadcrumbItem>
        <CBreadcrumbItem active>Daftar Kelas</CBreadcrumbItem>
      </CBreadcrumb>
      <CCard className="py-4 px-3">
        <CCardBody>
          <CRow xs={{ gutter: 2 }}>
            <CCardTitle className="d-flex justify-content-between">
              <h3 style={{ fontWeight: 'bold' }}>Daftar Kelas</h3>
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
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/Kelas">
                    <EyeIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>VII B</CTableDataCell>
                <CTableDataCell>Dang Iyun</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/Kelas">
                    <EyeIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>VII C</CTableDataCell>
                <CTableDataCell>Sri Wahyuni</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/Kelas">
                    <EyeIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">4</CTableHeaderCell>
                <CTableDataCell>VII D</CTableDataCell>
                <CTableDataCell>Tuti</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/Kelas">
                    <EyeIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">5</CTableHeaderCell>
                <CTableDataCell>VII E</CTableDataCell>
                <CTableDataCell>Sri Wahyuni</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/Kelas">
                    <EyeIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">6</CTableHeaderCell>
                <CTableDataCell>VII F</CTableDataCell>
                <CTableDataCell>Endang Sukanti</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/Kelas">
                    <EyeIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
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
      </div>
    </>
  )
}

export default DaftarKelas
