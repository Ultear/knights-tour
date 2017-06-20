import React from 'react'

const Field = ({children, fieldCoords, onClick}) => (
  <div onClick={onClick} className="matrix__row__field" data-field={fieldCoords}>
    {children}
  </div>
)

export default Field
