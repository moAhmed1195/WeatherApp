const request = require("request");

const geocode = (address, callback) => {
  const url = `https://us1.locationiq.com/v1/search?key=pk.69836b884c5efa8ef7872224fed683b4&q=${address}&format=json&limit=1`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("faild to connect", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        name: body[0].display_name,
      });
    }
  });
};

module.exports = geocode;
