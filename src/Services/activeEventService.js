import axios from "axios";

export default class EventService {
  getEventData() {
    return axios.get(
      "https://api.yildizskylab.com/api/events/getAllBizbizeEvents"
    );
  }
}
