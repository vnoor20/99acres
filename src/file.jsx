import React from 'react';
import aim from './aim.module.css';

const PropertyDetails = ({ property }) => {
  return (
    <div className={aim.property}>
      <h2>{property.name}</h2>
      <img src={property.pictureUrl} alt={property.name} />
      <p>Price: ${property.price}</p>
      <p>Details: {property.details}</p>
    </div>
  );
};

const PropertyList = ({ properties }) => {
  const renderProperties = () => {
    return properties.map((property) => (
      <PropertyDetails key={property.id} property={property} />
    ));
  };

  return (
    <div>
      {renderProperties()}
    </div>
  );
};

export default PropertyList;