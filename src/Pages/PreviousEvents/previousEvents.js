import React, { useEffect, useState } from "react";
import "./previousEvents.css";
import PreviousEventBox from "./previousEventBox";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const PreviousEvents = () => {
  const [events, setEvents] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

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
        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {events
              .filter((event_) => event_.isActive === 0)
              .map((event, index) => (
                <PreviousEventBox event={event} index={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
