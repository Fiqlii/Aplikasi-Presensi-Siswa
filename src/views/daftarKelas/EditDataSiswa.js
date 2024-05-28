import React, { useState } from 'react'
// import CIcon from '@coreui/icons-react'

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


const EditDataSiswa = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
    <CCard>
      <CCardBody>
        <CCardTitle>Edit Data Siswa</CCardTitle>
        <CForm>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">Nama</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nama Siswa"/>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">NIS</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nomor NIS"/>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">Kelas</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Input Nama Kelas"/>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">No Orang Tua</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput1" placeholder="Masukan Nomor Telepon Orang Tua"/>
          </div>
        </CForm>
        <CButton color="primary" onClick={() => setVisible(!visible)}>Submit</CButton>
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
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>
        </CModal>
      </CCardBody>
    </CCard>
    </>
  )
}

export default EditDataSiswa
