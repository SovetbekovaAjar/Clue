import React from "react";
import HeroSlider, {Slide} from 'hero-slider';
// Images //
const bogliasco="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB_Z-jPLgaubTHU1L0iIOQk8MAhtNCbwcOg&usqp=CAU";
const counterClare="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB_Z-jPLgaubTHU1L0iIOQk8MAhtNCbwcOg&usqp=CAU";
const counterRock ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB_Z-jPLgaubTHU1L0iIOQk8MAhtNCbwcOg&usqp=CAU";
const giauPass ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB_Z-jPLgaubTHU1L0iIOQk8MAhtNCbwcOg&usqp=CAU";

const App = () => {
    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientaion="horizotal"
            initialSlide={1}
            onBeforeChange={(previouSlide,nextSlider) => console.log("onBeforeChange", previouSlide, nextSlider)}
            onChange={nextSlider => console.log("onChange", nextSlider)}
            onAfterChange={nextSlider => console.log("oneAfterChange", nextSlider)}
            style={{
                backgroundColor: "rgba(0, 0, 0.33)"
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                sholdAutoplay: true, // здесь должно быть shouldAutoplay
                shouldDisplayButtons: true,
                autoplayDuration: 500,
                height: "100vh"
            }}
            
        >
            <Slide
            background={{
                backgroundImage: bogliasco,
                backgroundAttachment: "fixed"
            }}
            />
               <Slide
            background={{
                backgroundImage: counterClare,
                backgroundAttachment: "fixed"
            }}
            />
               <Slide
            background={{
                backgroundImage: counterRock,
                backgroundAttachment: "fixed"
            }}
            />
               <Slide
            background={{
                backgroundImage: giauPass ,
                backgroundAttachment: "fixed"
            }}
            />
        </HeroSlider>
    )
}
export default App;