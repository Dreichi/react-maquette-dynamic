import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PuzzleCard from './PuzzleCard';
import puzzlesvg from './puzzle.svg';

export default function Puzzle() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="puzzle">
            <Slider {...settings}>
            <PuzzleCard name="Lorem ipsum" img={puzzlesvg} text='Lorem ipsum dolor sit amat, consecctetur adipiscing elit. Fusce sed scelerisque turps, nec feugiat leo. Duis efficitur eget sapien finibus sagittis.'/>
            <PuzzleCard name="Lorem ipsum" img={puzzlesvg} text='Lorem ipsum dolor sit amat, consecctetur adipiscing elit. Fusce sed scelerisque turps, nec feugiat leo. Duis efficitur eget sapien finibus sagittis.'/>
            <PuzzleCard name="Lorem ipsum" img={puzzlesvg} text='Lorem ipsum dolor sit amat, consecctetur adipiscing elit. Fusce sed scelerisque turps, nec feugiat leo. Duis efficitur eget sapien finibus sagittis.'/>
            </Slider>
        </div>
    )
}