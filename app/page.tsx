import Link from 'next/link'
import styles from './page.module.css'
import { getSlugs, postArticle } from '@/lib/api'
import { slugify, unslugify } from '@/lib/helpers'

async function getLinks(): Promise<
  {
    name: string
    href: string
  }[]
> {
  // ✓ TODO: make this dynamically query 
  // hint: `getSlugs`
  let slugs = getSlugs();
  let links = new Array();
  
  (await slugs).forEach((slug) => {
    // generate correct link for slug
    let href = '/articles/' + slug; 
    // generate article name from slug
    let name = unslugify(slug)
    links.push({name: name, href: href})
  })
    
  return links;
}

export default async function Home() {
  const links = await getLinks()
  // handler function for article form 
  const handlePostArticle = async (formData: FormData) => {
    'use server'
    let title = formData.get('title')
    let content = formData.get('content')

    if (!title || !content) return false

    title = title.toString() 
    content = content.toString() 

    let slug = slugify(title)
    return await postArticle(slug, content)
  }
  return (
    <>
      <main>
        <ul>
          {
            // ✓ TODO: use `map` to render links with `Link` component
            // wrapped in ? elements
            links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))  
          }
        </ul>
      </main>

      {
        // ✓ TODO: use Next.js server actions to
        // ultimately `postArticle` in `api.ts`
        // there are also HTML attribute problems

        // Note: wasn't really sure what we wanted here, I was looking
        // into the documentation on how server actions usually look like 
        // and I didn't know how to implment them within the return statement, 
        // so I implemented them using a handler function for the form
      }
      <form action={handlePostArticle} className={styles.articleForm}>
        <input name='title' type='text' placeholder='Article title'></input>
        <textarea name='content' className={styles.articleEditor} />
        <button type='submit'>Post Article</button>
      </form>
    </>
  )
}
