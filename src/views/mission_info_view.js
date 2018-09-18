const PubSub = require('../helpers/pub_sub.js');

const MissionInfoView = function(container){
  this.container = container;
}

MissionInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('AllMissions:mission-object', (event) =>{
    const selectedMission = event.detail;
    this.render(selectedMission);
  })
}

MissionInfoView.prototype.render = function(){
  this.container.innerHTML = '';

  const missionName = this.createTextElement('h3', mission.mission_name)
  this.container.appendChild(missionName);
  const missionRocket = this.createTextElement('h4', mission.rocket)
  this.container.appendChild(missionRocket);

}

MissionInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = MissionInfoView;
