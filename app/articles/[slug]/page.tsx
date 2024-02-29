'use client'
import { usePathname } from 'next/navigation'


export default function ArticlePage() {
  // ✓ TODO: get `slug` and use to get article
  // please do not use hacky URL mutations
  // check Next.js docs :)'
  const slug = usePathname().split("/").reverse()[0];
  // couldn't really figure this out after spending 6 hours on it
  // attempted to add in a server component that I can pass the slug to
  // and then get the article back, kept getting extremely hard-to-debug rendering errors
  return <>{slug}</>
}
