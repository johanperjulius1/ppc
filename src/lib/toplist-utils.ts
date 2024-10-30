import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Casino } from "../types/types"; // Adjust the import path as necessary


const postsDirectory = path.join(process.cwd(), "casinos");

export function getPostsFiles() {
    // Returns an array of file names in the directory
    return fs.readdirSync(postsDirectory);
}

export function getAllPostsData(): Casino[] {
  const postFiles = getPostsFiles();
  const allPostsData = postFiles.map((postFile) => {
      const filePath = path.join(postsDirectory, postFile);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        title: data.title,
        logo: data.logo,
        rating: data.rating,
        excerpt: data.excerpt,
        link: data.link,
        positive1: data.positive1,
        positive2: data.positive2,
        turnoverBonus: data.turnoverBonus,
        turnoverFreespin: data.turnoverFreespin,
        perks: {
          perk1: data.perk1 || "",
          perk2: data.perk2 || "",
          perk3: data.perk3 || "",
          perk4: data.perk4 || "",
          perk5: data.perk5 || "",
          perk6: data.perk6 || "",
        }
      } as Casino;
  });
  
  allPostsData.sort((a, b) => {
    return b.rating - a.rating
  })

  return allPostsData;
}
