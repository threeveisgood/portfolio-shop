import { useAppSelector } from "./useReduxFunctions";

export default function useWriteState() {
  return useAppSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    price: write.price,
    productURL: write.productURL,
    imageLinks: write.imageLinks,
    username: write.username,
    shipping: write.shipping,
    store: write.store,
    category: write.category,
    originalPostId: write.originalPostId,
  }));
}
