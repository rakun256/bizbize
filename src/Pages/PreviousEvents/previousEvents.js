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
} from "./EmblaCarouselArrowButtons";

// Separate component for year-specific carousel
const YearCarousel = ({ yearEvents }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {yearEvents.map((event, index) => (
            <PreviousEventBox key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PreviousEvents = () => {
  const [events, setEvents] = useState([]);
  const [groupedEvents, setGroupedEvents] = useState({});

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get(
          "https://apiv1.bin.net.tr:8080/api/events/getEvents"
        );
        
        // Group events by academic year
        const grouped = response.data.data
          .filter(event => event.isActive === 0)
          .reduce((acc, event) => {
            const date = new Date(event.date);
            const year = date.getMonth() >= 8 
              ? `${date.getFullYear()}-${date.getFullYear() + 1}`
              : `${date.getFullYear() - 1}-${date.getFullYear()}`;
            
            if (!acc[year]) {
              acc[year] = [];
            }
            acc[year].push(event);
            return acc;
          }, {});

        // Sort events within each year
        Object.keys(grouped).forEach(year => {
          grouped[year].sort((a, b) => new Date(b.date) - new Date(a.date));
        });

        setGroupedEvents(grouped);
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
        {Object.entries(groupedEvents)
          .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
          .map(([year, yearEvents]) => (
            <div key={year} className="academic-year-section">
              <h2 className="academic-year-title">{year} Akademik Yılı</h2>
              <YearCarousel yearEvents={yearEvents} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviousEvents;
