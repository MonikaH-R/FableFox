// simple mock API using local arrays so the site runs offline/demo
const books = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", file_url: "/books/pride.pdf", cover: "" },
  { id: 2, title: "Alice in Wonderland", author: "Lewis Carroll", genre: "Fantasy", file_url: "/books/alice.pdf", cover: "" },
  { id: 3, title: "Sherlock Holmes", author: "A. Conan Doyle", genre: "Mystery", file_url: "/books/sherlock.pdf", cover: "" },
  { id: 4, title: "Into the Wild", author: "Jon Krakauer", genre: "Adventure", file_url: "/books/wild.pdf", cover: "" }
];

export async function getBooks() { return Promise.resolve(books); }
export async function getBook(id) { return Promise.resolve(books.find(b=>b.id===Number(id))); }
export async function getSimilar(id){
  const book = books.find(b=>b.id===Number(id));
  if(!book) return [];
  return Promise.resolve(books.filter(b=>b.genre===book.genre && b.id!==book.id).slice(0,3));
}
export async function getRecommendations(userId){
  // simple rule-based: pick top 3 not favorites — demo picks first 3
  return Promise.resolve(books.slice(0,3));
}
