import { BookItem } from "../components/BookListItem";
import { allCovers } from "../../../assets/booksCovers";

const getCover = () =>
  allCovers[Math.floor(Math.random() * allCovers.length - 1)];
const getHasNewChapter = () => Math.floor(Math.random() * 1) === 0;
const getVolumn = () =>
  Math.floor(Math.random() * 3) === 1
    ? Math.floor(Math.random() * 3) + 1
    : undefined;

export const lastSeemBooks: BookItem[] = [
  {
    title: "A assombração Pirata",
    id: "1",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
  {
    title: "24 horas depois",
    id: "2",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
  {
    title: "24 horas antes",
    id: "3",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
  {
    title: "Senta que lá vem história",
    id: "4",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
];

export const fictionAndAction: BookItem[] = [
  {
    title: "Mas não é deus",
    id: "1",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
  {
    title: "Os campos mortos da magnólia ",
    id: "2",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
  {
    title: "Volta infinita",
    id: "3",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
  {
    title: "rumos e romores",
    id: "4",
    hasNewChapter: getHasNewChapter(),
    volum: getVolumn(),
    cover: getCover(),
  },
];
