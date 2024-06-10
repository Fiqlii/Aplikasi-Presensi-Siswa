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
  CRow,
  CForm,
  CFormInput,
  CPagination,
  CPaginationItem,
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'

import {
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
} from '@heroicons/react/24/solid'

const DaftarSiswa = () => {

  const [entries, setEntries] = useState(5);
  return (
    <>
    <div className='container-lg px-4'>
      <CBreadcrumb className='breadcrumb mb-4'>
        <CBreadcrumbItem href="#/dashboard">Dashboard</CBreadcrumbItem>
        {/* <CBreadcrumbItem href="#/daftarKelas">Daftar Kelas</CBreadcrumbItem> */}
        <CBreadcrumbItem active>Daftar Siswa</CBreadcrumbItem>
      </CBreadcrumb>
      <CCard className="py-4 px-3">
        <CCardBody>
          <CRow xs={{ gutter: 2 }}>
            <CCardTitle className="d-flex justify-content-between">
              <h3 style={{ fontWeight: 'bold' }}>Daftar Siswa</h3>
              <CButton
                color="primary"
                shape="rounded-pill"
                as="button"
                href="#/inputDataSiswa"
              >
                Tambah Data Siswa
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
                  {/* <div className="d-flex justify-content-between" style={{ width: '45%' }}> */}
                  <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataGuru">
                    <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                    {/* <CButton color="danger" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                      <TrashIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                    </CButton>
                  </div> */}
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
                  <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataSiswa">
                    <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
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
                  <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataSiswa">
                    <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
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
                  <CButton color="warning" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }} as="button" href="#/editDataSiswa">
                    <PencilSquareIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
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

export default DaftarSiswa
