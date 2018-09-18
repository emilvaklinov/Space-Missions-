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
  // const rocketName = this.createTextElement('h4', rocket.rocket_name)
  // this.container.appendChild(rocketName);

}

// const rocketNames = rockets.rocket_names.forEach((rocket) => {
//     const rocketName = this.createTextElement('p', rocket.rocket_name);
//     this.container.appendChild(rocketName);
//
// MissionInfoView.prototype.render = function(){
//   this.container.innerHTML = '';
//   const missionRocketName = this.createTextElement('h3', mission.rocket.rocket_name)
//   this.container.appendChild(missionRocketName);
//
// }

MissionInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = MissionInfoView;
