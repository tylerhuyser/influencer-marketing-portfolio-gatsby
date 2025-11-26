import React from 'react'
import LazyImage from './shared/LazyImage';

export default function PressArticles(props) { 

  const { press } = props

  return (
    <div className="press-articles-container">
      {press.map((article, i) => {
        // console.log(article)
        return (
          <a
            href={article.frontmatter.removeLink ? `${article.frontmatter.pressLink.split('.com/')[0]}.com` : article.frontmatter.pressLink}
            className="press-link"
            target='_blank'
            rel="noopener noreferrer"
          >
            <LazyImage
              src={article.frontmatter.publisherImage}
              placeholder={article.frontmatter.publisherImage.replace('/upload/', '/upload/w_20/e_blur:200/')}
              alt="publisher-logo"
              className="publisher-image"
              key={i}
            />
            <p className='publisher-name'>{article.frontmatter.publisherName} // ({article.frontmatter.blockQuote})</p>
          </a>
        )
      })}
    </div>
  )
}