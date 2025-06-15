import React from 'react'
import { PropertyProps } from '@/interfaces';


const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.rating}</p>
      <p>${property.price}</p>
    </div>
  );
};

export default PropertyCard;
