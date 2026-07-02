import { notFound } from "next/navigation";
import { getBookById, getAuthorById } from "@/data/mockData";
import BookDetailView from "@/components/book/BookDetailView";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BookPage({ params }: Props) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) notFound();

  const author = getAuthorById(book.authorId) ?? null;

  return <BookDetailView book={book} author={author} />;
}
