DataManager.saveGame = function(savefileId) {
    const contents = this.makeSaveContents();
    const saveName = this.makeSavename(savefileId);
    //Custom
    saveScores(savefileId);

    return StorageManager.saveObject(saveName, contents).then(() => {
        this._globalInfo[savefileId] = this.makeSavefileInfo();
        this.saveGlobalInfo();
        return 0;
    });
};

saveScores = function(savefileid) {
    const score = $gameVariables.value(100);
    const name = $gameVariables.value(99);
    localforage.setItem(savefileid + 'score', score);
    localforage.setItem(savefileid + 'name', name);
}