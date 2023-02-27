import React from 'react'
import { Link } from 'react-router-dom'

export const Orders = () => {
  return (
    <div>
        <nav >
            <Link className="link" to="/loginDashbord/dashbord/ProductsDashbord">کالاها</Link>
            <Link className="link" to="/loginDashbord/dashbord/inventory">موجودی و قیمت</Link>
            <Link className="link" to="/loginDashbord/dashbord/orders">سفارشات</Link>
            <Link className="link" to="/">بازگشت به سایت</Link>
        </nav>
        <h1>this is a orders page</h1>
    </div>
  )
}
