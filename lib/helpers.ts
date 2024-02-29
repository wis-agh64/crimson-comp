export function slugify(text: string) {
    return text
      .toString()                    // Convert to string
      .toLowerCase()                 // Convert to lowercase
      .trim()                        // Trim leading/trailing whitespace
      .normalize('NFD')              // Normalize diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
      .replace(/[^a-z0-9 ]/g, '-')   // Replace non-alphanumeric characters (except space) with hyphens
      .replace(/\s+/g, '-')          // Replace whitespace with hyphens
      .replace(/-+/g, '-')           // Replace multiple hyphens with single hyphen
      .replace(/^-+/, '')            // Trim hyphens from start of text
      .replace(/-+$/, '');           // Trim hyphens from end of text
}

export function unslugify(slug: string) {
    let words = slug.split('-');
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i]; 
      words[i] = word.charAt(0).toUpperCase() + word.slice(1); 
    }
    return words.join(' '); 
}