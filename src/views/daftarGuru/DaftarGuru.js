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
  CRow,
  CForm,
  CFormInput,
  CPagination,
  CPaginationItem,
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'

import {
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'

const DaftarGuru = () => {

  const [entries, setEntries] = useState(5);

  return (
    <>
    <div className='container-lg px-4'>
      <CBreadcrumb className='breadcrumb mb-4'>
        <CBreadcrumbItem href="#/dashboard">Dashboard</CBreadcrumbItem>
        <CBreadcrumbItem active>Daftar Guru</CBreadcrumbItem>
      </CBreadcrumb>
      <CCard className='py-4 px-3'>
        <CCardBody>
          <CRow xs={{ gutter: 2 }}>
            <CCardTitle className="d-flex justify-content-between">
              <h3 style={{ fontWeight: 'bold' }}>Daftar Guru</h3>
              <CButton
                color="primary"
                shape="rounded-pill"
                as="button"
                href="#/inputDataGuru"
              >
                Tambah Data Guru
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
          <CTable className='px-5 mt-3'>
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
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataGuru">
                      <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <TrashIcon className="text-blue-500 size-lg ml-2" style={{ width: '24px', height: '24px' }}/>
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
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataGuru">
                      <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <TrashIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>Asep Sunandar</CTableDataCell>
                <CTableDataCell>2115110339</CTableDataCell>
                <CTableDataCell>43215678</CTableDataCell>
                <CTableDataCell>VII F</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between" style={{ width: '45%' }}>
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataGuru">
                      <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <TrashIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">4</CTableHeaderCell>
                <CTableDataCell>Agisti Rahmawati</CTableDataCell>
                <CTableDataCell>2115110342</CTableDataCell>
                <CTableDataCell>812348765</CTableDataCell>
                <CTableDataCell>VII B</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-between" style={{ width: '45%' }}>
                    <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataGuru">
                      <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                    <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <TrashIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div>
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

export default DaftarGuru
