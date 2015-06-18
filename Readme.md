# PixiPlugin

A plugin for [Greensock's GSAP](https://greensock.com/gsap) for tweening [Pixi.js](http://www.pixijs.com/) objects.

Without plugin:
```js
var object = new PIXI.Sprite(texture);

TweenLite.to(object.position, 1, {x: 200});
TweenLite.to(object.scale, 1, {x: 2, y: 2});

```

With plugin:

```js
var object = new PIXI.Sprite(texture);

TweenLite.to(object, 1, {pixi: { x: 200, scale: 2}});
```