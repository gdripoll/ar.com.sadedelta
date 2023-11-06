import ReactGA from "react-ga4";

const GA4 = {
  initialize() {
    this.say(`initialize`);
    ReactGA.initialize("G-M0NWJ4YY33");
  },
  pageView(title = "???") {
    this.say("pageView", { title });
    ReactGA.send({
      hitType: "pageview",
      page: window.document.location + "",
      title: title,
    });
  },
  say(msg, data = "") {
    // console.log(`%cGA4> ${msg}%c `, "color:blue", "color:gray", data);
  },
};

export default GA4;
