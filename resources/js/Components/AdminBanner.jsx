import { usePage } from '@inertiajs/react';
import React from 'react';

export default function AdminBanner(){
    
    const page = usePage();
    const auth = page.props?.auth;
    const user = auth.user

    return(
        <div className='div-admin-banner'>
            <h1> {user.first_name} {user.last_name}</h1>
            <img src={`/storage/products/seed/product_9.png`} alt="" />
        </div>
    )
}