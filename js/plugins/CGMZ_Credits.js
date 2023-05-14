/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/credits/
 * @target MZ
 * @plugindesc Creates a credits scene for your game
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
 * Made for RPG Maker MZ 1.3.3
 * ----------------------------------------------------------------------------
 * Description: This plugin adds a "credits" option on the title screen which
 * allows you to enter in different categories such as art, programming, etc. 
 * and credit the people who helped you make your game.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ADDING CREDITS TO TITLE WINDOW:
 * You can use CGMZ Title Command Window to easily add the credits scene to
 * your game menu if desired. To do so, use the JavaScript command below:
 * this._commandWindow.close();
 * SceneManager.push(CGMZ_Scene_Credits);
 * 
 * ADDING CREDITS TO MAIN MENU:
 * You can use CGMZ Menu Command Window to easily add the credits scene to
 * your game menu if desired. To do so, use the JavaScript command below:
 * SceneManager.push(CGMZ_Scene_Credits);
 * ----------------------------Version History---------------------------------
 * Version 1.0.0 - Initial Release
 *
 * Version 1.0.1:
 * - Bugfix for cursor not returning to normal after exiting scene via keyboard
 * - Bugfix for line height not respecting text size differences
 * - Bugfix for credits not handling more than 1 line of text in comment
 *
 * Version 1.1.0:
 * - Added option to make the credits window transparent
 * - Added option to use custom background image in credits scene
 * - Removed automatic credit command in title screen
 *
 * @command Call Scene
 * @desc Calls the Credits Scene
 *
 * @param Credits
 * @type struct<CreditCategory>[]
 * @default []
 * @desc Set up credit categories here
 *
 * @param Window Options
 *
 * @param Scroll Speed
 * @parent Window Options
 * @type number
 * @min 0
 * @desc speed at which the credits window display scrolls (if needed)
 * @default 1
 *
 * @param Scroll Wait
 * @parent Window Options
 * @type number
 * @min 0
 * @desc amount of time (in frames) to wait before beginning to scroll
 * @default 300
 *
 * @param Scroll Deceleration
 * @parent Window Options
 * @type number
 * @min 0.01
 * @max 0.99
 * @decimals 2
 * @desc Rate of deceleration after letting go of touch
 * @default 0.92
 *
 * @param Auto Scroll
 * @parent Window Options
 * @type boolean
 * @desc Determine if the window should automatically scroll after so long of no user input
 * @default true
 *
 * @param Credits Text
 * @parent Window Options
 * @desc Text to display at the top of the credits window.
 * @default Credits
 *
 * @param Transparent Window
 * @parent Window Options
 * @type boolean
 * @desc Whether the credits window is transparent or not
 * @default false
 *
 * @param Background Image
 * @parent Window Options
 * @type file
 * @dir img/
 * @desc Image to show in the background of the scene. Default image used if none provided
*/
/*~struct~CreditCategory:
 * @param Category
 * @default 
 * @desc The name of the category (ex. plugins, art, etc).
 *
 * @param Credit
 * @type struct<CreditObject>[]
 * @default []
 * @desc Set up credits here
*/
/*~struct~CreditObject:
 * @param Name
 * @default 
 * @desc The name of the person / organization you wish to credit
 *
 * @param Comment
 * @default 
 * @desc A small note that will go next to the name
 *
 * @param URL
 * @default 
 * @desc The website of the person / organization to open when clicked (not displayed)
 *
 * @param URLText
 * @default 
 * @desc The website of the person / organization to display
*/
/*:zh-CN
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/credits/
 * @target MZ
 * @plugindesc 制作名单插件（用于对游戏插件、素材等资源作者等信息的注明和致谢）
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
 * 【RM版本】RPG Maker MZ 1.3.3
 * ----------------------------------------------------------------------------
 * 【插件描述】
 * 本插件可制作一个类似“制作人员清单”之类的界面。
 * 用于注明你游戏中所使用的插件、素材等资源的来源。
 * 以及对资源作者或提供者的感谢等。
 * ----------------------------------------------------------------------------
 * 【使用说明】
 * 一、在标题画面添加“制作人员清单”
 * 1、建议使用CGMZ_TitleCommandWindow插件。
 * 2、在自定义选项中输入如下JS脚本指令：
 * this._commandWindow.close();
 * SceneManager.push(CGMZ_Scene_Credits);
 *
 * 二、在游戏内菜单画面添加“制作人员清单”
 * 1、建议使用CGMZ Menu Command Window插件。
 * 2、在自定义选项中输入如下JS脚本指令：
 * SceneManager.push(CGMZ_Scene_Credits);
 *
 * 三、文本颜色
 *     除了"制作名单标题描述(Credits Text)"之外，其余文本可以使用\C[n]命令来设置文字颜色。
 *     如：类型Category，名字Name，简介Comment和网页链接描述URLText等。   
 * ---------------------------------------------------------------------------
 *【版本更新历史】
 * Version 1.0.0 - Initial Release
 * Version 1.0.1:
 * - Bugfix for cursor not returning to normal after exiting scene via keyboard
 * - Bugfix for line height not respecting text size differences
 * - Bugfix for credits not handling more than 1 line of text in comment
 * Version 1.1.0:
 * - Added option to make the credits window transparent
 * - Added option to use custom background image in credits scene
 * - Removed automatic credit command in title screen
 *
 * @command Call Scene
 * @text 打开制作名单界面
 * @desc 打开制作名单界面。
 *
 * @param Credits
 * @text 制作名单
 * @type struct<CreditCategory>[]
 * @default []
 * @desc 设置你的制作名单信息内容。
 *
 * @param Window Options
 * @text 窗口设置
 *
 * @param Scroll Speed
 * @text 滚动速度
 * @parent Window Options
 * @type number
 * @min 0
 * @desc speed at which the credits window display scrolls (if needed)
 * @default 1
 *
 * @param Scroll Wait
 * @text 滚动等待
 * @parent Window Options
 * @type number
 * @min 0
 * @desc amount of time (in frames) to wait before beginning to scroll
 * @default 300
 *
 * @param Scroll Deceleration
 * @text 滚动减速
 * @parent Window Options
 * @type number
 * @min 0.01
 * @max 0.99
 * @decimals 2
 * @desc Rate of deceleration after letting go of touch
 * @default 0.92
 *
 * @param Auto Scroll
 * @text 自动滚动
 * @parent Window Options
 * @type boolean
 * @desc Determine if the window should automatically scroll after so long of no user input
 * @default true
 *
 * @param Credits Text
 * @text 制作名单标题描述
 * @parent Window Options
 * @desc 设置你的制作名单的标题名称。
 * @default 制作名单
 *
 * @param Transparent Window
 * @text 窗口透明化
 * @parent Window Options
 * @type boolean
 * @desc 设置是否透明化制作清单界面的边框。Ture-透明化，False-不透明。
 * @default false
 *
 * @param Background Image
 * @text 背景图片
 * @parent Window Options
 * @type file
 * @dir img/
 * @desc 设置制作名单界面的背景图片。如不设置则模糊化处理。
*/
/*~struct~CreditCategory:zh-CN
 * @param Category
 * @text 类型
 * @default 
 * @desc 设置制作名单的类型。如插件类、立绘素材类、图块素材类等。
 *
 * @param Credit
 * @text 名单设置
 * @type struct<CreditObject>[]
 * @default []
 * @desc 设置制作名单的内容。如插件的作者、团队、简介和网站
*/
/*~struct~CreditObject:zh-CN
 * @param Name
 * @text 名字
 * @default 
 * @desc 设置你希望注明的资源、作者或团队的名字。
 *
 * @param Comment
 * @text 简介
 * @default 
 * @desc 设置一个关于该资源、作者或团队的简单的描述。
 *
 * @param URL
 * @text 网页链接（不显示）
 * @default 
 * @desc 设置一个网页链接，但这个链接不会被显示。
 *
 * @param URLText
 * @text 网页描述
 * @default 
 * @desc 设置一个关于网页链接的简单描述，点击该描述会跳转到指定网址。
*/
var Imported = Imported || {};
Imported.CGMZ_Credits = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Credits"] = "1.1.0";
CGMZ.Credits = CGMZ.Credits || {};
CGMZ.Credits.parameters = PluginManager.parameters('CGMZ_Credits');
CGMZ.Credits.CreditList = JSON.parse(CGMZ.Credits.parameters["Credits"]);
CGMZ.Credits.ScrollSpeed = Number(CGMZ.Credits.parameters["Scroll Speed"]);
CGMZ.Credits.ScrollWait = Number(CGMZ.Credits.parameters["Scroll Wait"]);
CGMZ.Credits.ScrollDeceleration = parseFloat(CGMZ.Credits.parameters["Scroll Deceleration"]);
CGMZ.Credits.AutoScroll = (CGMZ.Credits.parameters["Auto Scroll"] === "true");
CGMZ.Credits.TransparentWindow = (CGMZ.Credits.parameters["Transparent Window"] === "true");
CGMZ.Credits.BackgroundImage = CGMZ.Credits.parameters["Background Image"];
CGMZ.Credits.WindowTitle = CGMZ.Credits.parameters["Credits Text"];
//=============================================================================
// CGMZ_Credits
//-----------------------------------------------------------------------------
// Store and manage credit data
//=============================================================================
function CGMZ_Credits() {
    this.initialize.apply(this, arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Credits.prototype.initialize = function(credit) {
	this._categoryName = credit.Category;
	this._credits = [];
	const creditArray = JSON.parse(credit.Credit);
	for(let i = 0; i < creditArray.length; i++) {
		this._credits.push(JSON.parse(creditArray[i]));
	}
};
//-----------------------------------------------------------------------------
// Get the credit category
//-----------------------------------------------------------------------------
CGMZ_Credits.prototype.getCategory = function() {
	return this._categoryName;
};
//-----------------------------------------------------------------------------
// Get the individual credits
//-----------------------------------------------------------------------------
CGMZ_Credits.prototype.getCredits = function() {
	return this._credits;
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Manage Credit Data. Use temp class since this info doesn't need to be
// saved.
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also initialize credits data
//-----------------------------------------------------------------------------
const alias_CGMZ_Credits_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_Credits_createPluginData.call(this);
	this.initializeCreditsData();
};
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_Credits_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_Credits_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_Credits", "Call Scene", this.pluginCommandCreditsCallScene);
};
//-----------------------------------------------------------------------------
// Call the Encyclopedia Scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandCreditsCallScene = function() {
	SceneManager.push(CGMZ_Scene_Credits);
};
//-----------------------------------------------------------------------------
// Initialize credits data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeCreditsData = function() {
	this._credits = [];
	for(let i = 0; i < CGMZ.Credits.CreditList.length; i++) {
		const credit = new CGMZ_Credits(JSON.parse(CGMZ.Credits.CreditList[i]));
		this._credits.push(credit);
	}
};
//-----------------------------------------------------------------------------
// Get credits
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getCredits = function() {
	return this._credits;
};
//=============================================================================
// CGMZ_Scene_Credits
//-----------------------------------------------------------------------------
// Handles the credits scene
//=============================================================================
function CGMZ_Scene_Credits() {
    this.initialize(...arguments);
}
CGMZ_Scene_Credits.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_Credits.prototype.constructor = CGMZ_Scene_Credits;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Scene_Credits.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};
//-----------------------------------------------------------------------------
// Create credits window
//-----------------------------------------------------------------------------
CGMZ_Scene_Credits.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	this.createCreditsWindow();
};
//-----------------------------------------------------------------------------
// Create display window
//-----------------------------------------------------------------------------
CGMZ_Scene_Credits.prototype.createCreditsWindow = function() {
	const rect = this.creditsWindowRect();
    this._creditsWindow = new CGMZ_Window_Credits(rect);
	this._creditsWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._creditsWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the credits window
//-----------------------------------------------------------------------------
CGMZ_Scene_Credits.prototype.creditsWindowRect = function() {
	const x = Graphics.boxWidth / 8;
	const y = Graphics.boxHeight / 10;
	const height = Graphics.boxHeight - Graphics.boxHeight / 5;
	const width = Graphics.boxWidth - Graphics.boxWidth / 4;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Add background image
//-----------------------------------------------------------------------------
CGMZ_Scene_Credits.prototype.createBackground = function() {
	Scene_MenuBase.prototype.createBackground.call(this);
	if(CGMZ.Credits.BackgroundImage) {
		const imageData = $cgmzTemp.getImageData(CGMZ.Credits.BackgroundImage);
		this._backgroundCustomSprite = new Sprite();
		this._backgroundCustomSprite.bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		this.addChild(this._backgroundCustomSprite);
	}
};
//=============================================================================
// CGMZ_Window_Credits
//-----------------------------------------------------------------------------
// Window displaying credits information
//=============================================================================
function CGMZ_Window_Credits() {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_Credits.prototype = Object.create(CGMZ_Window_Scrollable.prototype);
CGMZ_Window_Credits.prototype.constructor = CGMZ_Window_Credits;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.initialize = function(rect) {
	const heightMultiplier = 20; // maximum of 20 windows tall of data to scroll
    CGMZ_Window_Scrollable.prototype.initialize.call(this, rect, heightMultiplier, CGMZ.Credits.ScrollWait,
													 CGMZ.Credits.ScrollSpeed, CGMZ.Credits.AutoScroll,
													 CGMZ.Credits.ScrollDeceleration);
	this._urls = [];
	this._cursor = "default";
	this.setBackgroundType(2 * (CGMZ.Credits.TransparentWindow));
	this.activate();
	this.requestRefresh();
};
//-----------------------------------------------------------------------------
// Destroy
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.destroy = function() {
	CGMZ_Window_Scrollable.prototype.destroy.call(this);
	document.body.style.cursor = this._cursor;
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.refresh = function() {
	this.setupWindowForNewEntry();
	this._neededHeight = 0;
	this.drawTitle();
	let y = this.lineHeight();
	y = this.drawCredits(y);
	this._neededHeight = y;
};
//-----------------------------------------------------------------------------
// Draw Title of window
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.drawTitle = function() {
	this.contents.fontBold = true;
	this.drawText(CGMZ.Credits.WindowTitle, 0, 0, this.contents.width, 'center');
	this.contents.fontBold = false;
};
//-----------------------------------------------------------------------------
// Draw credits. Returns the y-value past the last credit drawn
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.drawCredits = function(y) {
	const credits = $cgmzTemp.getCredits();
	if(!credits || credits.length === 0) { // Error loading credits data
		$cgmzTemp.reportError("Error loading credits data", "CGMZ Credits", "Check credits entry configuration");
		return y;
	}
	for(let i = 0; i < credits.length; i++) {
		this.contents.fontBold = true;
		this.CGMZ_drawText(credits[i].getCategory(), 0, 0, y, this.contents.width, 'center');
		this.contents.fontBold = false;
		y += this.lineHeight();
		const creditEntries = credits[i].getCredits();
		for(let j = 0; j < creditEntries.length; j++) {
			y += this.CGMZ_drawText(creditEntries[j].Name, 0, 0, y, this.contents.width, 'center');
			if(creditEntries[j].Comment) {
				y += this.CGMZ_drawText(creditEntries[j].Comment, 0, 0, y, this.contents.width, 'center');
			}
			if(creditEntries[j].URL) {
				const urlHeight = this.CGMZ_drawText(creditEntries[j].URLText, 0, 0, y, this.contents.width, 'center');
				let urlObject = {};
				urlObject.url = creditEntries[j].URL;
				urlObject.rect = new Rectangle(0, y, this.contents.width, urlHeight);
				this._urls.push(urlObject);
				y += urlHeight;
			}
			y += this.lineHeight();
		}
	}
	y -= this.lineHeight(); // Remove blank line after last entry
	return y;
};
//-----------------------------------------------------------------------------
// Update
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.update = function() {
	CGMZ_Window_Scrollable.prototype.update.call(this);
	if(TouchInput.isClicked()) {
		this.checkClick();
	}
	this.checkHover();
};
//-----------------------------------------------------------------------------
// Check the user click position
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.checkClick = function() {
	const touchPos = new Point(TouchInput.x, TouchInput.y);
    const localPos = this.worldTransform.applyInverse(touchPos);
	const x = localPos.x;
	const y = localPos.y + this.origin.y;
	if(this.innerRect.contains(localPos.x, localPos.y)) {
		for(let i = 0; i < this._urls.length; i++) {
			const rect = this._urls[i].rect;
			const url = this._urls[i].url;
			if(rect.x < x && rect.x + rect.width > x && rect.y < y && rect.y + rect.height > y) {
				if(Utils.isNwjs()) {
					require('nw.gui').Shell.openExternal(url);
				} else {
					window.open(url);
				}
			}
		}
	}
};
//-----------------------------------------------------------------------------
// Check the user mouser position
//-----------------------------------------------------------------------------
CGMZ_Window_Credits.prototype.checkHover = function() {
	const touchPos = new Point(TouchInput.x, TouchInput.y);
    const localPos = this.worldTransform.applyInverse(touchPos);
	const x = localPos.x;
	const y = localPos.y + this.origin.y;
	let hoveringLink = false;
	if(this.innerRect.contains(localPos.x, localPos.y)) {
		for(let i = 0; i < this._urls.length; i++) {
			const rect = this._urls[i].rect;
			if(rect.x < x && rect.x + rect.width > x && rect.y < y && rect.y + rect.height > y) {
				hoveringLink = true;
			}
		}
	}
	if(hoveringLink) {
		document.body.style.cursor = "pointer";
	} else {
		document.body.style.cursor = this._cursor;
	}
};