import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import  logo  from 'src/assets/images/logo.png'

const Login = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
                    <img src={logo} alt="Logo" height={135} width={120}/>
                  </div>
                  <p className="text-body-secondary mb-5">Silahkan Login Untuk Mengakakses Aplikasi</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Masukan NIP/NIS" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                  </CInputGroup>
                  <CCol xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CButton color="primary" className="px-4 mt-4">
                      Submit
                    </CButton>
                  </CCol>
                </CForm>
              </CCardBody>
           </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
