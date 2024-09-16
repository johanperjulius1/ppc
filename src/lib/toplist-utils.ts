import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "casinos");

export function getPostsFiles() {
    // Returns an array of file names in the directory
    return fs.readdirSync(postsDirectory);
}

export function getAllPostsData() {
  const postFiles = getPostsFiles();
  const allPostsData = postFiles.map((postFile) => {
      const filePath = path.join(postsDirectory, postFile);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
          ...data,
      };
  });
  
  allPostsData.sort((a, b) => {
    return b.rating - a.rating
  })

  return allPostsData;
}



// const postsDirectory = path.join(process.cwd(), "casinos");
// export function getPostsFiles() {
//     // Returns an array of file names in the directory
//     return fs.readdirSync(postsDirectory);
//   }

//   export function getPostData(postIdentifier) {
//     const slug = postIdentifier.replace(/\.md$/, "");
  
//     const filePath = path.join(postsDirectory, `${slug}.md`);
//     const fileContent = fs.readFileSync(filePath, "utf-8");
//     const { data, content } = matter(fileContent);
  
//     const postData = {
//       slug: slug,
//       ...data,
//       content,
//     };
  
//     return postData;
//   }