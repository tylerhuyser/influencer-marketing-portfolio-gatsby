import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={title && title.includes('Influencer Campaign') ? title : defaultTitle}>
      <title>{seo.title}</title>
      <html lang="en" />
      <link rel="canonical" href={seo.url} />

      <meta name="description" content={seo.description.slice(0, 157)+'...'} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description.slice(0, 157)+'...'} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description.slice(0, 157)+'...'} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="JdshZ3EvS1IpZvsqPwhoi1vrTlxH5NJxMxBFQRSbeao" />
    </Helmet>
  );
};

export default Head;