import axios from "axios";

export default class EventService {
  getEventData() {
    return axios.get(
      "http://164.132.27.119:8080/api/events/getActiveEvent?isActive=1"
    );
  }
}
