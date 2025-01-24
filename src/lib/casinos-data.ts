import { getAllPostsData, sortByRating, sortBySmallestBonusTurnover } from "./toplist-utils";
import { Casino } from "@/types/types";

export const casinos: Casino[] = getAllPostsData();
export const casinosByRating: Casino[] = sortByRating(casinos);
export const casinosBySmallestBonusTurnover: Casino[] = sortBySmallestBonusTurnover(casinos); 