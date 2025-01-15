import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';

function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <FaHeart className='text-red-500' />
    </Button>
  );
}

export default FavoriteToggleButton;
