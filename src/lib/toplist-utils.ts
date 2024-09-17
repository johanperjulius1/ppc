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
      } as Casino;
  });
  
  allPostsData.sort((a, b) => {
    return b.rating - a.rating
  })

  return allPostsData;
}
