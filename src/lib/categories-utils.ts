import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

// Define the Category interface for type safety
interface Category {
    title: string;
    description: string;
    content: string;
}

// Set the base directory for categories
const categoriesDirectory = path.join(process.cwd(), "categories");

// Function to retrieve data for a single category from its file path
export function getCategoryData(filePath: string): Category {
    const fullPath = path.join(categoriesDirectory, filePath);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
        title: data.title || 'No Title',
        description: data.description || 'No Description',
        content: content
    };
}