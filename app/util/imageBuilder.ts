import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { getSanityClient } from './client'


export function imageBuilder(source: SanityImageSource) {
  const client = getSanityClient()
  const builder = createImageUrlBuilder(client)

  return builder.image(source)
}
