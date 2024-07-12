import React from 'react'
import NewInvoice from '../components/Invoice/NewInvoice'
import ViewInvoice from '../components/Invoice/ViewInvoice'

const AllInvoice = () => {

  const isAdmin = true;
  const isUser = false;
  return (
    <div>
        {isUser && <NewInvoice/>}
        {isAdmin && <ViewInvoice/>}


    </div>
  )
}

export default AllInvoice