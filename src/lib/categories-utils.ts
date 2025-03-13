import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const categoriesDirectory = path.join(process.cwd(), "categories");

export function getCategoriesFiles() {
    // Returns an array of file names in the directory
    return fs.readdirSync(categoriesDirectory);
}
