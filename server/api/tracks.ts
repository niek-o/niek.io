import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig()

  const songs = await fetch(`${runtimeConfig.cdnUrl}/tracks/visible`, {
    headers: {
      'x-api-key': runtimeConfig.apiKey
    }
  })

  return await songs.json()
})
