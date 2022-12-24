import ReactGA from "react-ga";

const AnalyticsEventTracker = (category="Mondo Car Home Page category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default AnalyticsEventTracker;