function helper() {
    throw new Error('This is a static class');
};

//Not working
helper.pushGameVariable = function(gameVariable, value) {
    var temp = $gameVariables.value(gameVariable)
    temp.push(value)
    $gameVariables.setValue(gameVariable, temp)
};

const $massiveBleeding = [27, 29, 33, 38, 47, 54, 65, 72, 78, 79, 80, 87, 91, 97, 100, 107, 110, 111];
const $airways = [3, 4, 11, 25, 43, 44, 45, 57, 59, 62, 71, 95, 103, 105, 106, 109];
const $respiration = [4, 10, 18, 19, 20, 31, 34, 50, 64, 77, 84, 2, 12, 30, 40, 42, 44, 45, 61, 85, 98, 109];
const $circulation = [1, 22, 24, 26, 28, 65, 81, 94];
const $hypothermia = [5, 21, 22, 23, 36, 41, 50, 58, 75, 90, 101, 115, 116];
const $hotZone = [8, 14, 15, 16, 33, 38, 46, 78, 87, 107];
const $warmZone = [2, 3, 4, 5, 6, 11, 12, 14, 18, 19, 21, 23, 31, 39, 48, 55, 80, 94];
const $coldZone = [1, 2, 4, 5, 7, 9, 12, 13, 18, 24, 26, 32, 43, 50, 68, 72, 80, 85, 94, 101, 103];
const $triage = [49, 60, 67, 111, 112, 113, 116];
const $drugs = [6, 7, 9, 13, 17, 29, 32, 35, 37, 39, 48, 53, 56, 66, 69, 76, 86, 88, 89, 92, 93, 96];
const $other = [51, 52, 70, 73];


helper.chooseThemes = function(massiveBleeding, airways, respiration, circulation, hypothermia, hotZone, warmZone, coldZone, triage, drugs, other) {
    var themeUseArray = [massiveBleeding, airways, respiration, circulation, hypothermia, hotZone, warmZone, coldZone, triage, drugs, other]
    var themeArray = [$massiveBleeding, $airways, $respiration, $circulation, $hypothermia, $hotZone, $warmZone, $coldZone, $triage, $drugs, $other]
    var finalAllowed = []
    for (var i = 0; i < themeUseArray.length; i++) {
        if(themeUseArray[i]) {
            finalAllowed = [].concat(themeArray[i],finalAllowed)
        }
    }
    // REMOVE THIS SOMETIME IN THE FUTURE FOR  THE LOVE OF  GOD
    console.log(finalAllowed)
    return finalAllowed
};

helper.calcScore = function(timePassed) {
    //Start: Modify these to modify score gained
    const maxScore = 100
    const scorePenaltyPerSecond = 10
    const minScore = 10
    const msBeforeScoreStartsToDecrease = 1000
    //end
    var scoreGained = 0

    //Only start recieving less points after certain time passed
    if (timePassed > msBeforeScoreStartsToDecrease) {
        timePassed -= msBeforeScoreStartsToDecrease
        scoreGained = maxScore - (scorePenaltyPerSecond * Math.floor(timePassed/1000))
    }
    else {
        scoreGained = 100
    }
    

    //Always recieve a minimum amount of points for correct answer
    if (scoreGained > minScore) {
        $gameVariables.setValue(100, $gameVariables.value(100) + scoreGained)
    }
    else {
        $gameVariables.setValue(100, $gameVariables.value(100) + minScore)
    }
}

helper.saveGameToCurrentSaveFile = function() {
    var currentSaveFileIndex = $gameSystem.savefileId()
    if (currentSaveFileIndex == 0) {
        currentSaveFileIndex = $gameSystem.savefileId()
    }
    $gameSystem.onBeforeSave();
    DataManager.saveGame(currentSaveFileIndex);
}

helper.reloadCurrentGameAtLatestSave = function() {
    var currentSaveFileIndex = DataManager.latestSavefileId()
    if(DataManager.loadGame(currentSaveFileIndex)){
        if ($gameSystem.versionId() !== $dataSystem.versionId){
            $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
            $gamePlayer.requestMapReload();
        }
        $gameSystem.onAfterLoad();
        SceneManager.goto(Scene_Map);
    }
}
//Does not really work

// helper.saveGameToSecretSaveFile = function() {
//     var secretSafeFileIndex = 30
//     $gameSystem.onBeforeSave();
//     DataManager.saveGame(secretSafeFileIndex);
// }

// helper.loadSecretSaveFile = function() {
//     var secretSafeFileIndex = 30
//     if(DataManager.loadGame(secretSafeFileIndex)){
//         if ($gameSystem.versionId() !== $dataSystem.versionId){
//             $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
//             $gamePlayer.requestMapReload();
//         }
//         $gameSystem.onAfterLoad();
//         SceneManager.goto(Scene_Map);
//     }
// }