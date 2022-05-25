import sanityClient from '@sanity/client'

export default sanityClient({
   projectId: '8rd02cxr',
   dataset: 'production',
   apiVersion: '2022-05-25',
   useCdn: false
})