const PubSub = require('../helpers/pub_sub.js');

const MissionInfoView = function(){
  this.container = container;
}

MissionInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('AllMissions:mission-object', (event) =>{
    const selectMission = event.detail;
    this.render(selectedMission);
  })
}

MissionInfoView.prototype.render = function(){
  this.container.innerHTML = '';

  const missionName = this.createTextElement('h3', mission.name)
  this.container.appendChild(missionName);

}

MissionInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = MissionInfoView;
