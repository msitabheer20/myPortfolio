'use client'
import dynamic from 'next/dynamic';

const Cursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});

export default Cursor
