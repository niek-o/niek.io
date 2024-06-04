import type { ImageModifiers, ProviderGetImage } from '@nuxt/image'
import { joinURL } from 'ufo'

const operationsGenerator = (modifiers: Partial<ImageModifiers>) => {
  return `width=${modifiers.width}&height=${modifiers.height}`
}

export const getImage: ProviderGetImage = (src, { modifiers = {} } = {}) => {
  const baseURL = useRuntimeConfig().public.cdnUrl

  const operations = operationsGenerator(modifiers)

  return {
    url: joinURL(baseURL, '/images', src + (operations ? '?' + operations : ''))
  }
}
