import Toplist from "@/components/toplist";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CasinoSisters.com',
  description:
    'CasinoSisters.com - the number one casino review page',
};
export default function Home (){  
  return (
    <>
    <Toplist/>
    </>
  )
}