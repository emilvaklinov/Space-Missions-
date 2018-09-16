const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js')

const AllMissions = function(){
  this.data = null;
}

AllMissions.prototype.getData = function() {
  const request = new Request('https://api.spacexdata.com/v2/launches/all');
  request.get((data) => {
    this.data = data;
    PubSub.publish('AllMissions:mission-list', this.data);
  });
};


AllMissions.prototype.bindEvents = function (){
  PubSub.subscribe('SelectedMission:selected-mission', event => {
    const selectedIndex = event.detail;
    const SelectedMission = this.data[selectedIndex];

    PubSub.publish('AllMissions:mission-object', SelectedMission);
  })
}

module.exports = AllMissions
