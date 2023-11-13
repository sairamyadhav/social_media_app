import React, { Suspense } from 'react';

const LazyLoadSuspense = ({ children, ...rest }) => {
  return (
    <Suspense fallback={<h1>...loading</h1>} {...rest}>{ children }</Suspense>
  )
}

export default LazyLoadSuspense;