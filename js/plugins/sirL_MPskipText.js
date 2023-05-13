/*:
@target MZ
@title sirL_MP6s_1b_34
@author SirLegna
@date May 3, 2023
@url https://sirlegna.itch.io/sir-legnas-plugin-generator 
@filename sirL_MP6s_1b_34
Please reach out to me for any help or just to talk about your project

@plugindesc This plugin is composed of multiple plugins. If problem report it with debug hash which can be found in Help section to the generator page.
@command Control Skip Text.SetSkipableText
@text Set skip-able text
@desc Sets the ability to skip text
	@arg skipableText
	@text Allow skip-able text
	@type boolean
	@desc Should player be able to skip text?
	@default true
	@on Enable Skip
	@off Disable Skip



@param Control Skip Text

@param cST.skipableText
@text Allow skip-able text
@parent Control Skip Text
@desc Should player be able to skip text?
@default true
@type boolean
@on Enable Skip
@off Disable Skip

@ End of params
@help
Generator Version = 2.2.0
Debug Hash : 6s_1b_34

	
If you find any issue, please let me know via the 
Community page at 
https://sirlegna.itch.io/sir-legnas-plugin-generator/
community

This plugin is composed of multiple plugins, which are listed here:
	1. v1.0.0 - Control Skip Text

===== v1.0.0 - Control Skip Text =====
This plugin is allow the developer to control if the player 
can skip text in message box

Use Cases:
Using plugin command to change the ability to skip text 
in message box:
	1. Go to an Event's contents in which you would like the 
	command executed
	2. Add the plugin command "Set skip-able text"
	3. Define the Allow skip-able text boolean to Enable or 
	Disable the ability
	4. Hit the okay button when the game executes the next 
	show message box, it will have the new state

Plugin Commands:
	* Set skip-able text - Sets the ability to skip text

Tips:
	* Plugin Commands overwrite Plugin Parameters

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Window_Message.prototype.updateShowFast

CHANGELOG
	v1.0.0 - Initial creation of Control Skip Text

TERMS OF USE
	All required Terms of Use follow the higher the number, 
	the higher the priority, for example: 1. Can use X and 
	then 2. Cannot use X, then you cannot use X

	Optional Terms of Use are terms that the creator would 
	like to have, but are not forcing anyone to follow.

REQUIRED TERMS OF USE
	1. You are free to use the plugin created in any 
	commercial or non-commercial projects with the RPG 
	Maker software.
	2. You are free to modify the script created to your 
	liking however, for any bug fixes or general features you 
	are required to post an explanation in the Bugs/Features 
	Requests forums on the generator page. This is so that 
	the community can always be using the best code 
	available.
	3. You are not allowed to modify the terms of use except 
	for creating stricter terms.
	4. Place SirLegna Generated Plugins in your credits

OPTIONAL TERMS OF USE
	* Gifting SirLegna a copy of your game. I would love to 
	see how you use my code for ideas on how to improve 
	my plugins.

CREDITS:
	 - SirLegna can be found at https://sirlegna.itch.io/ 
	Creator
	 - Kurochan can be found at https://kurochan.itch.io/
	Tester, code reviewer, and fellow idea generator.
	 - jerjer can be found at 
	https://stackoverflow.com/a/9092085
	Creator of the getFnParamNames function
	 - Dmitri Pavlutin can be found at 
	https://dmitripavlutin.com/
	how-to-compare-objects-in-javascript/
	Creator of the shallowEqual function
*/


var Imported = Imported || {};
Imported.sirL_MP6s_1b_34 = true;
var SirL = SirL || {};
SirL.MPCore = SirL.MPCore || {};
SirL.MP6s_1b_34 = SirL.MP6s_1b_34 || {};
SirL.MP6s_1b_34.pluginName = decodeURI(document.currentScript.src.match(/.+\/(.+)\.js/)[1]);
SirL.MP6s_1b_34.pP = PluginManager.parameters(SirL.MP6s_1b_34.pluginName);
SirL.MPcST = SirL.MPcST || {};
typeof SirL.savablePP != `undefined` ? SirL.savablePP = SirL.savablePP.concat(...[{"name":"skipText","code":"return Boolean(JSON.parse(SirL.MP6s_1b_34.pP[\"cST.skipableText\"]))"}]) : SirL.savablePP = [{"name":"skipText","code":"return Boolean(JSON.parse(SirL.MP6s_1b_34.pP[\"cST.skipableText\"]))"}];
PluginManager.registerCommand(SirL.MP6s_1b_34.pluginName,"Control Skip Text.SetSkipableText", function SirL_Code(args){
	$gameSystem._sirL.savablePP.skipText = Boolean(JSON.parse(args.skipableText));
});
Game_System.prototype.initialize =  function() {
	//Doesn't hurt but specifically for TileBasedScaling
	document.body.style.overflow = "hidden"
	window.addEventListener("resize",Graphics._onWindowResize)
	this._sirL = this._sirL || {}
	try{
		parsedParameters = SirL_MPTileEvent_parameterParser()
		parsedParameters.then(function(result){
			SirL.MPTileEvent.linkage = result;
		});
	} catch (err) {}
	
	try{
		this._sirL.MPsCP = this._sirL.MPsCP || {}
		this._sirL.MPsCP.haveSeen = this._sirL.MPsCP.haveSeen || {"item":[],"weapon":[],"armor":[]}
	} catch (err){}
	
	try{
		sPPs = SirL.savablePP;
		this._sirL.savablePP = this._sirL.savablePP || {}
	} catch (err) { sPPs = []}
	for(sPPId = 0; sPPId < sPPs.length; sPPId++){
		sP = sPPs[sPPId]
		this._sirL.savablePP[sP.name] = new Function(sP.code)(this);
	}
	
	this._saveEnabled = true;
    this._menuEnabled = true;
    this._encounterEnabled = true;
    this._formationEnabled = true;
    this._battleCount = 0;
    this._winCount = 0;
    this._escapeCount = 0;
    this._saveCount = 0;
    this._versionId = 0;
    this._savefileId = 0;
    this._framesOnSave = 0;
    this._bgmOnSave = null;
    this._bgsOnSave = null;
    this._windowTone = null;
    this._battleBgm = null;
    this._victoryMe = null;
    this._defeatMe = null;
    this._savedBgm = null;
    this._walkingBgm = null;
};
Window_Message.prototype.updateShowFast = function() {
    if (this.isTriggered()) {
		try {  this._showFast =  $gameSystem._sirL.savablePP.skipText  } catch (err) {  this._showFast = true }
    }
};
Graphics._onWindowResize = function() {
	if (SirL.hasOwnProperty('MPTileBasedScaling')){
		SirL.MPTileBasedScaling.calculate()
		SirL.MPTileBasedScaling.refresh()
	}
    Graphics._updateAllElements();
};
