// components/Rating.js
import Star from './star';

const Rating = ({ rating }) => {
  const totalStars = 5; // Total number of stars to display

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default Rating;
