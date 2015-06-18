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
        priority: 0,
        API: 2,
        version: "1.0.0",
        overwriteProps: ["alpha", "rotation", "x", "y", "scale", "scaleX", "scaleY", "pivot", "pivotX", "pivotY", "anchor", "anchorX", "anchorY"],

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

                    case 'pivot':
                        self._addTween(target.pivot, "x", target.pivot.x, value, property);
                        self._addTween(target.pivot, "y", target.pivot.y, value, property);
                        break;
                    case 'pivotX':
                        self._addTween(target.pivot, "x", target.pivot.x, value, property);
                        break;
                    case 'pivotY':
                        self._addTween(target.pivot, "y", target.pivot.y, value, property);
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
                        console.warn('Property "' + property + '" is not supported by the PixiPlugin');
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