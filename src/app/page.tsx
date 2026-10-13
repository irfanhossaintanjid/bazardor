
import HeroBanner from '@/components/HeroBanner';
import ProductSection from '@/components/ProductSections';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
       <Suspense
          fallback={
  <div className=" skeleton mx-auto flex h-52 max-w-6xl items-center justify-center">
    <span className="loading loading-spinner w-16 text-[#05893e]" />
  </div>}
        >
      <HeroBanner/>
      
          <ProductSection />
        </Suspense>
      
    </div>
  );
};

export default page;