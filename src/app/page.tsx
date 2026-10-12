
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSections';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
       <Suspense
          fallback={<div className="skeleton mx-auto my-2 h-8 w-full max-w-6xl" />}
        >
      <Hero/>
      
          <ProductSection />
        </Suspense>
      
    </div>
  );
};

export default page;