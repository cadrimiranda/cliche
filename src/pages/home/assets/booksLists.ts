import { BookItem } from "../components/BookListItem";
import { allCovers } from "../../../assets/booksCovers";

const getCover = () =>
  allCovers[Math.floor(Math.random() * (allCovers.length - 1))];
const getHasNewChapter = () => Math.floor(Math.random() * 2) === 0;
const getVolumn = () =>
  Math.floor(Math.random() * 3) === 1
    ? Math.floor(Math.random() * 3) + 1
    : undefined;

const createBook = (title: string, id: number) => ({
  title,
  id: id.toString(),
  hasNewChapter: getHasNewChapter(),
  volum: getVolumn(),
  cover: getCover(),
});

export const lastSeemBooks: BookItem[] = [
  "A assombração Pirata",
  "24 horas depois",
  "24 horas antes",
  "Senta que lá vem história",
].map(createBook);

export const fictionAndAction: BookItem[] = [
  "Mas não é deus",
  "Os campos mortos da magnólia",
  "Volta infinita",
  "rumos e romores",
].map(createBook);

export const top10: BookItem[] = [
  "O terrário",
  "As férias da minha vida",
  "Mas não é deus",
  "rumos e romores",
].map(createBook);

export const youMayLike: BookItem[] = [
  "Park Peter",
  "3 homens e alguns segredos",
  "Ele não era qualquer um",
  "Antes de ontem",
].map(createBook);

export const newBooks: BookItem[] = [
  "Como matar um vampiro em 10 passos",
  "Viva LoLi",
  "Sem volta",
  "rumos e romores",
].map(createBook);
