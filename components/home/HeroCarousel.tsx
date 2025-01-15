import Hero1 from '@/public/images/hero1.jpg';
import Hero2 from '@/public/images/hero2.jpg';
import Hero3 from '@/public/images/hero3.jpg';
import Hero4 from '@/public/images/hero4.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

const carouselImages = [Hero1, Hero2, Hero3, Hero4];

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className='p-2'>
                  <Image
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    className='w-full h-[24rem] rounded-md object-cover'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
