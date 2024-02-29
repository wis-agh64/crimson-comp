// uou won't need other imports
'use server'
import fs from 'fs'
import path from 'path'

// gets path to `articles` dir in current working dir
const root = path.join(process.cwd(), 'articles')

export async function getSlugs(): Promise<string[]> {
  // ✓ TODO: return discovered slugs in filesystem from `root`
  return new Promise((resolve, reject) => {
    fs.readdir(root, (err, files) => {
      if (err) {
        console.log(err); 
        reject([]); 
      }
      let slugs = new Array(); 
      files.forEach(file => {
        let slug = file.split('.')[0]
        slugs.push(slug);
      });
      resolve(slugs);
    });
  })
}


export async function getArticle(slug: string): Promise<string> {
  // ✓ TODO: get the text from a markdown file with the given `slug`
  // `slug` can be, e.g., `hello-world`, `the-success`, etc.
  let path = root + "/" + slug + ".md"; 
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err); 
        return;
      }
      resolve(data); 
    });
  });
}

export async function postArticle(slug: string, content: string): Promise<boolean> {
  // ✓ TODO: create markdown file in filesystem with slug and content
  return new Promise((resolve, reject) => {
    fs.writeFile(root + "/" + slug + ".md", content, (err) => {
      if (err) {
        reject(false); 
        return;
      }
      resolve(true); 
    });
  });
  // return `true` on success
  // must handle any errors and exceptions -> should then return `false`
}
