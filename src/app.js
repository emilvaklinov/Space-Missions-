const SelectedView = require('./views/selected_view.js')
const AllMissions = require('./models/all_missions.js');
const MissionInfoView = require('./views/mission_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const allMissions = new AllMissions();
allMissions.bindEvents();
allMissions.getData();


const selectElement = document.querySelector('select#missions');
const missionDropdown = new SelectedView(selectElement);
missionDropdown.bindEvents();

const missionInfoContainer = document.querySelector('div#mission');
const missionInfoView = new MissionInfoView(missionInfoView);
missionInfoView.bindEvents();

});
