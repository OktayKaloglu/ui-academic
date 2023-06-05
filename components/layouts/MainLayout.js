import Head from 'next/head';
import React from 'react';

import NavbarWrapper from '../Navbar/index';
import Box from '../styles/box';


export const MainLayout = ({children}) => {
   return (
      <Box as="main">
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta name="description" content="Academic Profile Syncer" />
            <meta name="author" content="Academic Profile Syncer" />
            <meta name="author" content="Academic Profile Syncer" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="twitter:title" content="Academic Profile Syncer" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Academic Profile Syncer" />
            <meta name="twitter:creator" content="@Academic Profile Syncer" />
            <meta property="og:site_name" content="Academic Profile Syncer " />
            <meta name="og:title" content="Academic Profile Syncer Siu" />
            <meta property="og:type" content="Academic Profile Syncer" />
            <title>Academic Profile Syncer</title>
         </Head>

         <NavbarWrapper />
         <Box
            css={{
               height: '90%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
            }}
         >
            {children}
           
         </Box>
      </Box>
   );
};