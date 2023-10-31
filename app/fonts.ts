// ------------------- Lib -------------------
import localFont from 'next/font/local';
// ------------------ Type -------------------
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

// -------------------------------------------
// ------------------ Font -------------------
// -------------------------------------------
const poppins: NextFontWithVariable = localFont({
  src: [
    {
      path: '../public/fonts/poppins/200-Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/300-Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/400-Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/500-Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/600-Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

export default poppins;
