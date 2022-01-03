export default function ChangeToThumbnail(item: string) {
    const S3_URL = String(process.env.S3_URL)
    const CLOUDFRONT_URL = String(process.env.CLOUDFRONT_URL)

    const thumbnailLink: string = item.replace(
        S3_URL,
        CLOUDFRONT_URL
    ).concat("?w=300&q=90")
    
    return thumbnailLink
}