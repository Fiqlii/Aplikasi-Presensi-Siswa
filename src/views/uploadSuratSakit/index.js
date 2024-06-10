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
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'

import {
  EyeIcon,
} from '@heroicons/react/24/solid'

const UploadSuratSakit = () => {


  return (
    <>
    <div className='container-lg px-4'>
      <CBreadcrumb className='breadcrumb mb-4'>
        <CBreadcrumbItem href="#/dashboard">Dashboard</CBreadcrumbItem>
        <CBreadcrumbItem active>Upload Surat Sakit</CBreadcrumbItem>
      </CBreadcrumb>
      <CCard className="py-4 px-3">
        <CCardBody>
          <CCardTitle className="d-flex justify-content-between p-2">
            <h4 style={{ fontWeight: 'bold' }}>Upload Surat Keterangan Sakit/Izin Untuk Tanggal Tertentu</h4>
            <CButton
              color="primary"
              shape="rounded-pill"
            >
              Upload Bukti Surat Keterangan Absen
            </CButton>
          </CCardTitle>
          <CTable className='px-5 mt-3'>
            <CTableHead color="primary">
              <CTableRow>
                <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
                <CTableHeaderCell scope="col">Hari</CTableHeaderCell>
                <CTableHeaderCell scope="col">Keterangan Absensi</CTableHeaderCell>
                <CTableHeaderCell scope="col">Bukti Surat Sakit/Izin/Disepensasi</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>19 Februari</CTableDataCell>
                <CTableDataCell>Senin</CTableDataCell>
                <CTableDataCell>Izin</CTableDataCell>
                <CTableDataCell>Surat Izin Asep.pdf</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                    <EyeIcon className="text-blue-500 size-lg" style={{ width: '24px', height: '24px' }}/>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
    </>
  )
}

export default UploadSuratSakit
