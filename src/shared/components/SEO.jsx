import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'
import { SEO_CONFIG } from '../../config/seo'

export const SEO = ({ 
  title, 
  description, 
  keywords,
  image, 
  url, 
  type = 'website',
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  article = false 
}) => {
  const seo = {
    title: title || SEO_CONFIG.defaultTitle,
    description: description || SEO_CONFIG.defaultDescription,
    image: image?.startsWith('http') ? image : `${SEO_CONFIG.siteUrl}${image || SEO_CONFIG.defaultImage}`,
    url: `${SEO_CONFIG.siteUrl}${url || ''}`,
    ogTitle: ogTitle || title || SEO_CONFIG.defaultTitle,
    ogDescription: ogDescription || description || SEO_CONFIG.defaultDescription,
    twitterTitle: twitterTitle || title || SEO_CONFIG.defaultTitle,
    twitterDescription: twitterDescription || description || SEO_CONFIG.defaultDescription,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={seo.url} />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Boost Studio" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={seo.image} />
      
      {article && (
        <>
          <meta property="article:publisher" content={SEO_CONFIG.siteUrl} />
          <meta property="article:author" content="Boost Studio" />
        </>
      )}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  twitterTitle: PropTypes.string,
  twitterDescription: PropTypes.string,
  article: PropTypes.bool,
}
