/**
 * PixiPlugin
 *
 * https://github.com/NoProtocol/gsap-pixi-plugin
 */
var _gsScope = (typeof module !== "undefined" && module.exports && typeof global !== "undefined") ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine.plugin({
        propName: "pixi",
        priority: 0, //the priority in the rendering pipeline (0 by default). A priority of -1 would mean this plugin will run after all those with 0 or greater. A priority of 1 would get run before 0, etc. This only matters when a plugin relies on other plugins finishing their work before it runs (or visa-versa)
        API: 2,
        version: "1.0.0",
        overwriteProps: ["x", "y", "scale", "scaleX", "scaleY", 'alpha'], //an array of property names whose tweens should be overwritten by this plugin. For example, if you create a "scale" plugin that handles both "scaleX" and "scaleY", the overwriteProps would be ["scaleX","scaleY"] so that if there's a scaleX or scaleY tween in-progress when a new "scale" tween starts (using this plugin), it would overwrite the scaleX or scaleY tween.

        init: function (target, values, tween) {
            if (!target instanceof PIXI.DisplayObject) {
                return false;
            }

            var self = this;
            Object.keys(values).forEach(function (property) {
                var value = values[property];
                switch (property) {
                    // PIXI.DisplayObject
                    case 'alpha':
                    case 'rotation':
                        self._addTween(target, property, target.alpha, value, property);
                        break;

                    case 'x':
                        self._addTween(target.position, "x", target.position.x, value, property);
                        break;

                    case 'y':
                        self._addTween(target.position, "y", target.position.y, value, property);
                        break;

                    case 'scale':
                        self._addTween(target.scale, "x", target.scale.x, value, property);
                        self._addTween(target.scale, "y", target.scale.y, value, property);
                        break;
                    case 'scaleX':
                        self._addTween(target.scale, "x", target.scale.x, value, property);
                        break;
                    case 'scaleY':
                        self._addTween(target.scale, "y", target.scale.y, value, property);
                        break;

                        // PIXI.Sprite
                    case 'anchor':
                        self._addTween(target.anchor, "x", target.anchor.x, value, property);
                        self._addTween(target.anchor, "y", target.anchor.y, value, property);
                        break;
                    case 'anchorX':
                        self._addTween(target.anchor, "x", target.anchor.x, value, property);
                        break;
                    case 'anchorY':
                        self._addTween(target.anchor, "y", target.anchor.y, value, property);
                        break;

                    default:
                        console.log('propery "' + property + '" not supported by the PixiPlugin');
                }
            });

            return true;
        },
        set: function (ratio) {
            this._super.setRatio.call(this, ratio);
        }
    });
});
if (_gsScope._gsDefine) {
    _gsScope._gsQueue.pop()();
}