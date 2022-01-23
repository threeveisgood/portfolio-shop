export function ChangeToThumbnail(item: string) {
  const S3_URL = String(process.env.NEXT_PUBLIC_S3_URL);
  const CLOUDFRONT_URL = String(process.env.NEXT_PUBLIC_CLOUDFRONT_URL);

  const thumbnailLink: string = item
    .replace(S3_URL, CLOUDFRONT_URL)
    .concat("?w=300&q=90");

  return thumbnailLink;
}

export function ChangeToFrontURL(item: string) {
  const S3_URL = String(process.env.NEXT_PUBLIC_S3_URL);
  const CLOUDFRONT_URL = String(process.env.NEXT_PUBLIC_CLOUDFRONT_URL);

  const thumbnailLink: string = item.toString().replace(S3_URL, CLOUDFRONT_URL);

  return thumbnailLink;
}
