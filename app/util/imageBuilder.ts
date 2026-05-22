import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

export function imageBuilder(source: SanityImageSource) {
  return builder.image(source)
}
