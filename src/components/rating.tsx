// components/Rating.js
import Star from './star';

interface RatingProps {
  rating: number;
}

// const Rating: React.FC<RatingProps> = ({ rating }) => {
function Rating({rating}: RatingProps){
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
