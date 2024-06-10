import React, { useState } from 'react'

import {
  CForm,
  CFormLabel,
  CFormInput,
  CCardBody,
  CCard,
  CCardTitle,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'


const EditDataSiswa = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
    <div className='container-lg px-4 px-4'>
      <CBreadcrumb className='breadcrumb mb-4'>
        <CBreadcrumbItem href="#/dashboard">Dashboard</CBreadcrumbItem>
        <CBreadcrumbItem href="#/daftarSiswa">Daftar Siswa</CBreadcrumbItem>
        <CBreadcrumbItem active>Edit Data Siswa</CBreadcrumbItem>
      </CBreadcrumb>
      <CCard>
        <CCardBody className='px-5 mt-3'>
          <CCardTitle className='py-2 mt-3'>Edit Data Siswa</CCardTitle>
          <CForm className='row g-3'>
            <div className="col-md-6 mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Nama</CFormLabel>
              <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nama Siswa"/>
            </div>
            <div className="col-md-6 mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">NIS</CFormLabel>
              <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nomor NIS"/>
            </div>
            <div className="col-md-6 mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Kelas</CFormLabel>
              <CFormInput type="email" id="exampleFormControlInput1" placeholder="Input Nama Kelas"/>
            </div>
            <div className="col-md-6 mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">No Orang Tua</CFormLabel>
              <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nomor Telepon Orang Tua"/>
            </div>
          </CForm>
          <CButton
            color="primary"
            onClick={() => setVisible(!visible)}
            className="d-flex justify-content-center mx-auto my-5"
          >
            Submit
          </CButton>
          <CModal
            alignment="center"
            visible={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="VerticallyCenteredExample"
          >
            <CModalHeader>
              <CModalTitle id="VerticallyCenteredExample">Edit Data Siswa</CModalTitle>
            </CModalHeader>
            <CModalBody> Apakah Data Yang di Inputkan Sudah Benar? </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="primary" as="button" href="#/daftarSiswa">Save changes</CButton>
            </CModalFooter>
          </CModal>
        </CCardBody>
      </CCard>
    </div>
    </>
  )
}

export default EditDataSiswa
