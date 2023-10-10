module.exports = {

    // Set storage to true to enable persistent data storage
    "storage": true,

    // Set the port you want to run the peer on
    "port": 9999,

    // Add your huggingFace token to be used with AI smart policies
    "hf": null,

    // Set a checkpoint interval timer in ms to make a recovery checkpoint of the database
    // example: setting "checkpoint" to 60000 will make a point of recover every 1 minute
    // this works onyl with persistent storage enabled
    "checkpoint": null

}
