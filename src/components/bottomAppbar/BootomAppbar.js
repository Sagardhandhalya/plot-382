import React from 'react'
import "./style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const imageMapper = {
    home: '',
    homeActive: '',
    product: '',
    productActive: '',
    contactUs: '',
    contactUsActive: ''
}

const data = [
    {
        displayName: 'Home',
        icon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fhome-black.png?alt=media&token=8e4920cc-2d10-47db-854d-9f14c4edf857',
        activeIcon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fhome-blue.png?alt=media&token=38a9d5d8-d35c-4d00-8dee-43a18895b985',
        route: '/'
    },
    {
        displayName: 'Product',
        icon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fproduct-black.png?alt=media&token=a6c63343-4fd4-4e61-9d39-4240dae26cd6',
        activeIcon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fproduct-blue.png?alt=media&token=d8889f27-f0d4-4f4d-ab7e-6c1dfee83dcd',
        route: '/products'
    },
    {
        displayName: 'Contact Us',
        icon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fcontact-black.png?alt=media&token=b561e4a2-8e21-4b8f-b047-af8a02373c2b',
        activeIcon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fcontact-blue.png?alt=media&token=7fe78697-6e5b-4d0f-bf7c-79acbd750bbc',
        route: '/contact'
    },
    {
        displayName: 'Share',
        icon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fshare.png?alt=media&token=47189978-b0e6-4b06-9484-491c04a49e83',
        activeIcon: 'https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fshare.png?alt=media&token=47189978-b0e6-4b06-9484-491c04a49e83',
        route: '#'
    }
]


const BootomAppbar = () => {

    const [route, setRoute] = useState('')
    const history = useHistory()

    const switchTAb = (route) => {
        if (route === '#') {
            if (navigator.share) {
                navigator.share({
                    title: 'balamshahpir plot No 383',
                    url: window.location.href,
                    text: 'जय बालमशापिर दादा ट्रेडर्स आप को सस्ता ओर एसा प्रोडक्ट प्रॉवाड करता है।',
                })
            }
        } else {
            history.push(route)
        }
        setRoute(route)
    }

    return (
        <div className='appbar_container'>
            {
                data.map((tab) => (
                    <div className='icon_container' onClick={() => switchTAb(tab.route)}>
                        <img alt='icon' src={route === tab.route ? tab.activeIcon : tab.icon} />
                        <p className={route === tab.route && 'active_text'}>{tab.displayName}</p>
                    </div>
                ))
            }
        </div >
    )
}

export default BootomAppbar;