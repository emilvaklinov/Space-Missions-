const PubSub = require('../helpers/pub_sub.js');

const SelectedView = function(){
  this.element = element;
}

SelectedView.prototype.bindEvents = function(){
  PubSub.subscribe('AllMissions:mission-list', (event) => {
    console.log(event.detail);
    const allMissions = event.detail;
    this.populate(allMissions);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    console.log(selectedIndex);
    PubSub.publish('SelectedMission:selected-mission', selectedIndex);
  });
}
SelectedView.prototype.populate = function(allMissions){
  allMissions.forEach((mission, index) => {
    const option = document.createElement('option');
    option.textContent = mission.name;
    option.value = index;
    this.element.appendChild(option);
  });
}


module.exports = SelectedView;
