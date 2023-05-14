/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/titlecommandwindow/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_Changelog
 * @orderAfter CGMZ_Credits
 * @orderAfter CGMZ_ExitToDesktop
 * @plugindesc Manage the menu command window
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.1.0
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.2.1
 * ----------------------------------------------------------------------------
 * Description: Use this plugin to easily manage the command window in the
 * menu scene. It allows you to re-arrange commands or use JavaScript to 
 * add custom commands which are capable of calling custom plugin scenes or
 * functions.
 * ----------------------------------------------------------------------------
 * Documentation:
 * This plugin will overwrite the default title window if keep originals is
 * off. It is best to place this below any other plugins that add commands to
 * the title window if this option is used.
 *
 * The command symbol should be unique and not blank for every command. This
 * symbol is how the plugin knows internally which JS code to run.
 *
 * Some Command Symbols can have special meanings, mainly when they represent
 * the original commands.
 * The following symbols represent the original commands (case sensitive):
 * newGame - Will handle like the original new game command
 * continue - Will handle like the original continue command
 * options - Will handle like the original options command
 * 
 * It is important that you do not use these strings as the Command Symbol
 * property unless you mean to refer to the original commands.
 *
 * Options command:
 * {"Command Name":"Options","Command Symbol":"options","JS Command":"\"\""}
 * 
 * Version History:
 * 1.0.0: Initial Release
 * 
 * 1.0.1:
 * - Added ability to choose alignment of command text
 * 
 * 1.1.0:
 * - Added option to use text codes in commands
 *
 * @param Visible Commands
 * @type number
 * @min 0
 * @default 3
 * @desc This is the number of commands that will be visible in the window without scrolling
 *
 * @param Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc The alignment of the command text in the window
 *
 * @param Keep Original Commands
 * @type boolean
 * @default true
 * @desc Determine whether to show the original commands in their original order.
 *
 * @param Enable Text Codes
 * @type boolean
 * @default true
 * @desc Allow the use of text codes (such as colors) in commands?
 *
 * @param Commands
 * @type struct<Handler>[]
 * @desc Command Name and associated js commands
 * @default []
*/
/*~struct~Handler:
 * @param Command Name
 * @type text
 * @desc Name of the command to display in the command window.
 *
 * @param Command Symbol
 * @type text
 * @desc This symbol is used internally to recognize the command.
 * Special meaning for original commands (see documentation).
 *
 * @param JS Command
 * @type note
 * @desc JavaScript to run when command is selected.
 * @default ""
*/
/*:zh-CN
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/titlecommandwindow/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_Changelog
 * @orderAfter CGMZ_Credits
 * @orderAfter CGMZ_ExitToDesktop
 * @plugindesc 标题选项拓展系统（为标题画面增加新的选项和美化）
 * @help
 * ============================================================================
 * 【使用条款】
 * 1、本插件可作商用或非商用。
 * 2、须注明插件作者"Casper Gaming"。
 * 3、须提供该插件的作者网站链接。
 * 4、最终使用条款以作者官网公告为准。https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * 【赞助支持】
 * 您可以登陆以下网站并对作者进行支持和赞助。
 * 然后获得作者和其插件的最新资讯，以及测试版插件的试用。
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * 【插件版本】V 1.1.0
 * ----------------------------------------------------------------------------
 * 【兼容性】仅测试作者所制作的插件
 * 【RM版本】RPG Maker MZ 1.2.1
 * ----------------------------------------------------------------------------
 * 【插件描述】
 * 本插件可以轻松管理标题画面选项。
 * 可以使用JS语言命令来制作新的自定义选项。
 * 用于制作类似“鸣谢”、“制作名单”、“图鉴”等需要其他插件辅助的新选项。
 * 可以设置选项文字颜色，增加图标等。
 *
 * 【搭配插件】
 * CGMZ Core:核心插件，运行作者插件的必须插件!!!
 * CGMZ Changelog:版本记录插件，制作一个版本更新记录的界面。
 * CGMZ Credits:制作名单插件，制作一个游戏插件、素材等资源来源和资源作者等信息的界面。
 * CGMZ Exit To Desktop:退出游戏插件，制作一个选项，用于结束和退出游戏。
 * 注：本插件在插件列表中必须置于上述插件之下。
 * -----------------------------------------------------------------------------
 * 【使用说明】
 * 一、本插件支持关闭原标题选项的功能。
 *     如果你使用了其他添加标题画面选项的插件。
 *     请把本插件在插件列表里置于其他插件下方。
 * 二、每个自定义选项的命令字符或JS命令只能选择使用其中一种，且不能取空值。
 * 三、以下命令字符具有特殊含义，是用于默认指令的，请勿用于其他用途。字符区分大小写。
 *     如：newGame - 开始新游戏，continue - 继续游戏， options - 打开游戏设置。
 *
 * 举例：继续游戏的选项设置
 *     1、选项名称：继续游戏 （游戏标题画面显示的描述）
 *     2、命令字符：continue
 *     3、JS命令：（留空）
 * 文本命令则是：{"Command Name":"继续游戏","Command Symbol":"continue","JS Command":"\"\""}
 *
 * 举例2：自定义制作名单选项的设置（举例使用了作者的CGMZ Credits插件和JS脚本命令）
 *     1、选项名称：制作名单
 *     2、命令字符：（留空）
 *     3、JS命令：SceneManager.push(CGMZ_Scene_Credits);
 *
 * 四、通过设置，可以支持标题选项添加图标\I[n]或使用颜色\C[n]等文本指令。
 * 
 * ---------------------------------------------------------------------------
 *【版本更新历史】
 * 1.0.0: Initial Release 
 * 1.0.1: Added ability to choose alignment of command text 
 * 1.1.0: Added option to use text codes in commands
 * 
 * @param Visible Commands
 * @text 显示选项数
 * @type number
 * @min 0
 * @default 3
 * @desc 标题画面里显示的选项数，实际选项多于显示数会以滚动形式显示。显示选项数过多会超出画面和覆盖标题，须设置分辨率。
 *
 * @param Alignment
 * @text 选项中文字位置
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc 设置选项框中文字的位置。Left-靠左，Center-居中，Right-靠右。
 *
 * @param Keep Original Commands
 * @text 保留默认选项
 * @type boolean
 * @default true
 * @desc 是否保留游戏默认的选项。如：重新开始、继续游戏和游戏设置。Ture-保留，False-不保留。
 *
 * @param Enable Text Codes
 * @text 使用文本指令
 * @type boolean
 * @default true
 * @desc 是否允许选项的描述使用文本指令。如 \I[n]图标、\C[n]颜色等指令。Ture-允许，False-不允许。
 *
 * @param Commands
 * @text 自定义标题选项
 * @type struct<Handler>[]
 * @desc 设置你想要的标题画面选项。
 * @default []
*/
/*~struct~Handler:zh-CN
 * @param Command Name
 * @text 选项名字（显示）
 * @type text
 * @desc 在标题画面显示的选项名字。支持使用文本指令。如 \I[n]图标、\C[n]颜色等。
 *
 * @param Command Symbol
 * @text 命令字符
 * @type text
 * @desc 系统默认选项的指令，如：newGame、continue、options等。
 *
 * @param JS Command
 * @text JS命令
 * @type note
 * @desc 设置自定义选项用的JS命令，取决于你所使用的插件的脚本指令。
 * @default ""
*/
var Imported = Imported || {};
Imported.CGMZ_Title_CommandWindow = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Title Command Window"] = "1.1.0";
CGMZ.Title_CommandWindow = CGMZ.Title_CommandWindow || {};
CGMZ.Title_CommandWindow.parameters = PluginManager.parameters('CGMZ_TitleCommandWindow');
CGMZ.Title_CommandWindow.Alignment = CGMZ.Title_CommandWindow.parameters["Alignment"];
CGMZ.Title_CommandWindow.VisibleCommands = Number(CGMZ.Title_CommandWindow.parameters["Visible Commands"]);
CGMZ.Title_CommandWindow.KeepOriginals = (CGMZ.Title_CommandWindow.parameters["Keep Original Commands"] === "true");
CGMZ.Title_CommandWindow.EnableTextCodes = (CGMZ.Title_CommandWindow.parameters["Enable Text Codes"] === "true");
CGMZ.Title_CommandWindow.CommandsArray = JSON.parse(CGMZ.Title_CommandWindow.parameters["Commands"]);
CGMZ.Title_CommandWindow.Commands = [];
for(let i = 0; i < CGMZ.Title_CommandWindow.CommandsArray.length; i++) {
	CGMZ.Title_CommandWindow.Commands.push(JSON.parse(CGMZ.Title_CommandWindow.CommandsArray[i]));
}
//=============================================================================
// Scene Title
//-----------------------------------------------------------------------------
// Handling for command window entries
//=============================================================================
//-----------------------------------------------------------------------------
// Handling for custom Commands added through the plugin
//-----------------------------------------------------------------------------
Scene_Title.prototype.CGMZ_TitleCommand_commandCustom = function() {
	for(let i = 0; i < CGMZ.Title_CommandWindow.Commands.length; i++) {
		if(this._commandWindow.currentSymbol() === CGMZ.Title_CommandWindow.Commands[i]["Command Symbol"]) {
			try {
				eval(JSON.parse(CGMZ.Title_CommandWindow.Commands[i]["JS Command"]));
			}
			catch (e) {
				const origin = "CGMZ Title Command Window";
				const suggestion = "Check your JavaScript command";
				$cgmzTemp.reportError(e.message, origin, suggestion);
			}
		}
	}
};
//-----------------------------------------------------------------------------
// Alias. Add additional commands.
//-----------------------------------------------------------------------------
const alias_CGMZ_TitleCommandWindow_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
	alias_CGMZ_TitleCommandWindow_createCommandWindow.call(this);
	for(let i = 0; i < CGMZ.Title_CommandWindow.Commands.length; i++) {
		if(this.CGMZ_TitleCommandWindow_isCustomCommand(CGMZ.Title_CommandWindow.Commands[i]["Command Symbol"])) {
			this._commandWindow.setHandler(CGMZ.Title_CommandWindow.Commands[i]["Command Symbol"], this.CGMZ_TitleCommand_commandCustom.bind(this));
		}
	}
};
//-----------------------------------------------------------------------------
// Determine if command is a custom command in need of custom handler
//-----------------------------------------------------------------------------
Scene_Title.prototype.CGMZ_TitleCommandWindow_isCustomCommand = function(symbol) {
	return (symbol !== 'options' && symbol !== 'continue' && symbol !== 'newGame');
};
//-----------------------------------------------------------------------------
// Alias. Change the rectangle height based on number of visible commands
//-----------------------------------------------------------------------------
const alias_CGMZ_TitleCommandWindow_commandWindowRect = Scene_Title.prototype.commandWindowRect;
Scene_Title.prototype.commandWindowRect = function() {
    let rect = alias_CGMZ_TitleCommandWindow_commandWindowRect.call(this);
	rect.height = this.calcWindowHeight(CGMZ.Title_CommandWindow.VisibleCommands, true);
	return rect;
};
//=============================================================================
// Window TitleCommand
//-----------------------------------------------------------------------------
// Change commands in the command window
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Add original commands in original order if user wishes
//-----------------------------------------------------------------------------
const alias_CGMZ_TitleCommandWindow_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
	if(CGMZ.Title_CommandWindow.KeepOriginals) {
		alias_CGMZ_TitleCommandWindow_makeCommandList.call(this);
	}
	for(let i = 0; i < CGMZ.Title_CommandWindow.Commands.length; i++) {
		let cmd = CGMZ.Title_CommandWindow.Commands[i];
		this.addCommand(cmd["Command Name"], cmd["Command Symbol"], this.CGMZ_TitleCommandWindow_isCommandEnabled(cmd));
	}
};
//-----------------------------------------------------------------------------
// Check if command should be enabled
//-----------------------------------------------------------------------------
Window_TitleCommand.prototype.CGMZ_TitleCommandWindow_isCommandEnabled = function(command) {
	if(command["Command Symbol"] === "continue") {
		return this.isContinueEnabled();
	}
	return true;
};
//-----------------------------------------------------------------------------
// Change alignment of command text
//-----------------------------------------------------------------------------
Window_TitleCommand.prototype.itemTextAlign = function() {
    return CGMZ.Title_CommandWindow.Alignment;
};
//-----------------------------------------------------------------------------
// Allow use of text codes in command
//-----------------------------------------------------------------------------
Window_TitleCommand.prototype.drawItem = function(index) {
	if(CGMZ.Title_CommandWindow.EnableTextCodes) {
		const rect = this.itemLineRect(index);
		const align = this.itemTextAlign();
		this.resetTextColor();
		this.changePaintOpacity(this.isCommandEnabled(index));
		this.CGMZ_drawTextLine(this.commandName(index), rect.x, rect.y, rect.width, align);
	} else {
		Window_Command.prototype.drawItem.call(this, index);
	}
};