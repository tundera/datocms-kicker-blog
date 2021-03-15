import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'
import cn from 'classnames'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  responsiveImage: ResponsiveImageType
  slug?: string
}

const CoverImage: FC<CoverImageProps> = ({ title, responsiveImage, slug }) => {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
