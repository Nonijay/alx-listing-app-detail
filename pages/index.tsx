// pages/index.tsx
import React, { useState } from 'react';
import PropertyCard from '@/components/common/PropertyCard';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import Pill from '@/components/common/Pill';
import { FILTER_LABELS } from '@/components/common/filter';

const HomePage: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (label: string) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(label)
        ? prevFilters.filter((filter) => filter !== label)
        : [...prevFilters, label]
    );
  };

  return (
    <>
      <div className="bg-sky-500 h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Find your favorite place here!</h1>
        <h2 className="text-white">The best prices for over 2 million properties worldwide.</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 px-4">
        {FILTER_LABELS.map((label) => (
          <Pill
            key={label}
            label={label}
            isActive={activeFilters.includes(label)}
            onClick={() => toggleFilter(label)}
          />
        ))}
      </div>

      <div className="px-4">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard key={property.id} property={property}
            />
        ))}
      </div>
    </>
  );
};

export default HomePage; 
