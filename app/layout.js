import "./globals.css";
import Layout from '@/components/Layout.js'
import AccountDataProvider from "@/store/accountData";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets : ['latin'],
  weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variabel : '--font-poppins'
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
        <AccountDataProvider>
        
        <Layout>
        
        {children}
        </Layout>
        
        </AccountDataProvider>
        </body>
    </html>
  );
}
