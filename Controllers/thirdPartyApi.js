// // server/routes/uber.js

// const axios = require('axios');


// exports.handleUber = ('/estimates', async (req, res) => {
//     console.log('hello');
//   const { initialLocation, finalLocation } = req.body;

//   const data = {
//     pickup: {
//       latitude: initialLocation.lat,
//       longitude: initialLocation.lng,
//     },
//     dropoff: {
//       latitude: finalLocation.lat,
//       longitude: finalLocation.lng
//     }
//   };

//   try {
//     console.log('Data being sent to Uber:', data);
//     const response = await axios.post('https://api.uber.com/v1/guests/trips/estimates', data, {
//       headers: {
//         'Authorization': `Bearer ${process.env.UBER_SERVER_TOKEN}`,
//         'Content-Type': 'application/json',
//       }
//     });
//     console.log(initialLocation)

//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


