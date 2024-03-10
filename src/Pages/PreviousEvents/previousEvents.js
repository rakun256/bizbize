import React, { useEffect, useState } from "react";
import "./previousEvents.css";
import PreviousEventBox from "./previousEventBox";
import axios from "axios";

import "./embla.css"

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const PreviousEvents = () => {
  const [events, setEvents] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get(
          "https://api.bin.net.tr:8080/api/events/getEvents"
        );
        setEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };

    fetchEventsData();
  }, []);

  return (
    <div className='previous-events' id='prevent'>
      <h1 className='prevent-title'>ETKİNLİKLERİMİZ</h1>
      <div className='prevent-container'>
        <div className='embla' >
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container' ref={emblaRef}>
              {events
                .filter((event_) => event_.isActive === 0)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((event, index) => (
                  <PreviousEventBox event={event} index={index} />
                ))}
            </div>
          </div>
          <div className='embla__controls'>
            <div className='embla__buttons'>
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>

            <div className='embla__dots'>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
