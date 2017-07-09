# TradeMe.TradeMe.IconFont
Workflow for creating the iconfont for Trade Me 2015 style icons used in **Classic** [Trade Me](http://trademe.co.nz/)

Forked from [grunt-webfont](https://travis-ci.org/sapegin/grunt-webfont)

### 1.1.0
* New offline workflow not using Fontastic
* Updated with full 2015 icon set

### v11
* Archived font made with Fontastic

Full release notes with new icons and updates can be found in [Releases](http://github.com/jacoblapworth/trademe.trademe.iconfont/releases)

## Installation

```sh
brew update
brew install ttfautohint fontforge --with-python
npm install
```
* `fontforge` is only required for Sketch toolkit font ligatures
* Can use `Node` for production

### XQuartz
Install [XQuartz](http://xquartz.macosforge.org/)

Just the first time, start XQuartz from `Applications/Utilities/XQuartz.app`, go to the X11 menu, Preferences, Input, and **turn off** the `Enable keyboard shortcuts` under X11 or `Enable key equivalents` under X11 preference item. FontForge will start XQuartz automatically for you next time.

### FontForge
Install [FontForge](http://fontforge.github.io/en-US/downloads/mac/)

## Quick Start

```sh
grunt                           # Compiles icons into `iconfont/`
grunt webfont:production        # Compiles icons and styles for production
grunt webfont:sketchtoolkit     # Compiles only ligature iconfont for Sketch App
```
### Codepoints map
Existing icons are mapped and maintained to unicode characters in `src/codepoints`
