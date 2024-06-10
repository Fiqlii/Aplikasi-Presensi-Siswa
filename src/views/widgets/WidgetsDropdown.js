import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CWidgetStatsC,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'

import {
  UserGroupIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 2 }}>
      <CCol xs={4}>
      <CWidgetStatsC
        className="mb-3"
        icon={<UserGroupIcon className="text-blue-500 size-lg" style={{ width: '36px', height: '36px' }}/>}
        color='info'
        inverse
        progress={{ color: 'info', value: 100 }}
        text="Widget helper text"
        title="Jumlah Guru"
        value="25 Orang"
      />
      </CCol>
      <CCol xs={4}>
      <CWidgetStatsC
        className="mb-3"
        icon={<UserGroupIcon className="text-blue-500 size-lg" style={{ width: '36px', height: '36px' }}/>}
        color="success"
        inverse
        progress={{ color: 'success', value: 100 }}
        text="Widget helper text"
        title="Jumlah Siswa"
        value="600 orang"
      />
      </CCol>
      <CCol xs={4}>
      <CWidgetStatsC
        className="mb-3"
        icon={<BuildingOfficeIcon className="text-blue-500 size-lg" style={{ width: '36px', height: '36px' }}/>}
        color="warning"
        inverse
        progress={{ color: 'warning', value: 100 }}
        text="Widget helper text"
        title="Jumlah Kelas"
        value="27 Kelas"
      />
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
