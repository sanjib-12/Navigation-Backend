
const {TravelHistory} = require('../Models/databaseModel')


//To store travel History
exports.storeTravelData = async (req, res, next) =>{
    try {
        const travelData = req.body;
        console.log(travelData)
        const newTravelHistory = await TravelHistory.create(travelData);   
        console.log(newTravelHistory)

        
        res.status(201).json(newTravelHistory);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to store travel history' });
      }
}
//To get the travel History
exports.retrieveTravelData = async (req, res, next) =>{
    try {
        const userId = req.params.userId;
        const travelHistories = await TravelHistory.find({ userId: userId });
        res.status(200).json(travelHistories);
      } catch (error) {
        res.status(500).json({ error: 'Failed to get travel history' });
      }
}

