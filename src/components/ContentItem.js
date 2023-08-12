import React from 'react';

const ContentItem = ({ item }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const posterImage = item['poster-image'] === 'posterthatismissing.jpg'
    ? `${baseURL}/images/placeholder_for_missing_posters.png`
    : `${baseURL}/images/${item['poster-image']}`;

  return (
    <div className="content-item">
      <img src={posterImage} alt={item.name} />
      <p className="content-title">{item.name}</p>
    </div>
  );
};

export default ContentItem;
