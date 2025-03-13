import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const categoriesDirectory = path.join(process.cwd(), "categories");

export function getCategoriesFiles() {
    // Returns an array of file names in the directory
    return fs.readdirSync(categoriesDirectory);
}

export function getAllCategoriesData() {
    const categoriesFiles = getCategoriesFiles();
    const allCategoriesData = categoriesFiles.map((categoryFile) => {
        const filePath = path.join(categoriesDirectory, categoryFile);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        
        return { data, content };
    });
    return allCategoriesData;
}