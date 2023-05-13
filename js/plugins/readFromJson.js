var $myData = null;
var $funnyAnswers = null;
var $annoyedAnswers = null;
var $everydayAnswers = null;
var $seriousAdvice = null;
var $chineseProverbs = null;
var $chineseProverbsShort = null;

DataManager._databaseFiles.push({name: '$myData', src: 'allQuestions.json'});
DataManager._databaseFiles.push({name: '$funnyAnswers', src: 'Funny_answers.json'});
DataManager._databaseFiles.push({name: '$annoyedAnswers', src: 'Annoyed_answers.json'});
DataManager._databaseFiles.push({name: '$everydayAnswers', src: 'Everyday_answers.json'});
DataManager._databaseFiles.push({name: '$seriousAdvice', src: 'Serious_advice.json'});
DataManager._databaseFiles.push({name: '$chineseProverbsShort', src: 'Chinese_proverbs_short.json'});

//Prob dont need this shit but whatevs
function MyManager() {
    throw new Error('This is a static class');
};

MyManager.data = function(key) {
    return $myData[key];
};