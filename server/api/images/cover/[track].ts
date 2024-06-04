export default cachedEventHandler(
  async (event) => {
    const routeParam = getRouterParam(event, 'track')

    const runtimeConfig = useRuntimeConfig()

    const img = await fetch(`${runtimeConfig.cdnUrl}/images/cover/${routeParam}`, {})

    const arrayBuffer = await img.arrayBuffer()

    return btoa(
      new Uint8Array(arrayBuffer).reduce(function (data, byte) {
        return data + String.fromCharCode(byte)
      }, '')
    )
  },
  { maxAge: 60 * 60 }
)
