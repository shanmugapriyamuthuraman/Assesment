import { notFound } from "next/navigation";
import { getAuthorById, books } from "@/data/mockData";
import AuthorPageView from "@/components/book/AuthorPageView";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AuthorPage({ params }: Props) {
  const { id } = await params;
  const author = getAuthorById(id);
  if (!author) notFound();

  const authorBooks = books.filter((b) => b.authorId === id);
  const displayBooks = authorBooks.length > 0 ? authorBooks : books.slice(0, 10);

  return <AuthorPageView author={author} books={displayBooks} />;
}
