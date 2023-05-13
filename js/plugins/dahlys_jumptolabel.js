// Jump to Label 2
Game_Interpreter.prototype.jumpToLabel = function(label) {
    for (var i = 0; i < this._list.length; i++) {
        var command = this._list[i];
        if (command.code === 118 && command.parameters[0] === label) {
            this.jumpTo(i);
            return;
        }
    }
    return true;
};