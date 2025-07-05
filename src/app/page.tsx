import Toplist from "@/components/toplist/toplist";
import { casinosByRating } from "@/lib/casinos-data";

export default function Home() {
  return (
    <Toplist casinos={casinosByRating} />
  )
}