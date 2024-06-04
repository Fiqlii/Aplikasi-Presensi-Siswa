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
} from '@coreui/react'


const InputDataGuru = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
    <CCard>
      <CCardBody className='px-5 mt-3'>
        <CCardTitle className='py-2 mt-3'>Input Data Guru</CCardTitle>
        <CForm className='row g-3'>
          <div className="col-md-6 mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">Nama</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nama Guru"/>
          </div>
          <div className="col-md-6 mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">NIP</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nomor NIP"/>
          </div>
          <div className="col-md-6 mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">Wali Kelas</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Input Nama Wali Kelas"/>
          </div>
          <div className="col-md-6 mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">Password</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Input Nama Wali Kelas"/>
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
            <CModalTitle id="VerticallyCenteredExample">Menambahkan Data Guru</CModalTitle>
          </CModalHeader>
          <CModalBody> Apakah Data Yang di Inputkan Sudah Benar? </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>
        </CModal>
      </CCardBody>
    </CCard>
    </>
  )
}

export default InputDataGuru
