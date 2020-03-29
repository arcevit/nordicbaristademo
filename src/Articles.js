import React, { useContext } from 'react';
import { ArticleContext } from './Context';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import HighLighter from './HighLighter';

export default function Articles() {
  let { loading, paginatedArticles } = useContext(ArticleContext);

  if (loading) {
    return (
      <div className='row'>
        <Loading />
      </div>
    );
  }

  return (
    <section className='my-5'>
      {paginatedArticles.map((article, index) => {
        return (
          <div className='row mb-5' key={index}>
            <div className='col-lg-4'>
              <div className='view overlay rounded z-depth-2 mb-lg-0 mb-4'>
                <img
                  className='img-fluid'
                  src={article.urlToImage}
                  alt='Sample'
                />
              </div>
            </div>

            <div className='col-lg-8'>
              <HighLighter>
                <h4 className='font-weight-bold'>
                  <strong>{article.title}</strong>
                </h4>
              </HighLighter>
              <p className='text-primary mb-1'>
                Post: {article.publishedAt.split('T')[0]}
              </p>

              <p className='text-muted mb-2'>{article.description}</p>
              <Link to={`/blogs/${article.publishedAt}`}>
                <button className='btn btn-primary btn-sm px-4'>
                  Read more
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
