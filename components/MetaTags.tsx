import Head from 'next/head'

export interface MetaTagsProps {
  pageTitle: string
  pageRelativeURL?: string
  description?: string
  imageURL?: string
  imageAltText?: string
}

export default function MetaTags({
  pageTitle,
  pageRelativeURL,
  description,
  imageURL = `${process.env.NEXT_PUBLIC_SITE_URL}/skiing-wide.jpg`,
  imageAltText = 'Wide shot of Matt Dorling skiing in the Cairngorms',
}: MetaTagsProps) {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      {!!description && <meta name="description" content={description} />}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          pageRelativeURL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}${pageRelativeURL}`
            : `${process.env.NEXT_PUBLIC_SITE_URL}`
        }
      />
      <meta property="og:title" content={pageTitle} />
      {!!description && <meta name="og:description" content={description} />}
      <meta property="og:image" content={imageURL} />
      <meta property="og:image:alt" content={imageAltText} />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:url"
        content={
          pageRelativeURL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}${pageRelativeURL}`
            : `${process.env.NEXT_PUBLIC_SITE_URL}`
        }
      />
      <meta name="twitter:title" content={pageTitle} />
      {!!description && (
        <meta name="twitter:description" content={description} />
      )}
      <meta name="twitter:image" content={imageURL} />
      <meta name="twitter:image:alt" content={imageAltText} />
    </Head>
  )
}
