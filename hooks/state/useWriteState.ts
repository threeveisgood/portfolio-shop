import { useSelector } from "react-redux";
import { WriteState } from "types/write";

export default function useWriteState() {
  return useSelector(({ write }: WriteState) => ({
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
