import sanityClient  from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-25', // use current UTC date - see "specifying API version"!
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN, // or leave blank for unauthenticated usage
  ignoreBrowserTokenWarning: true,
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);