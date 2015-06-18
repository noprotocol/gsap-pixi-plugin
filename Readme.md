# PixiPlugin

A plugin for [Greensock's GSAP](https://greensock.com/gsap) for tweening [Pixi.js](http://www.pixijs.com/) objects.

Without the PixiPlugin:

```js
var sprite = new PIXI.Sprite(texture);

sprite.alpha = 0.85;
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;
sprite.scale.x = 0.7;

TweenLite.to(object.position, 1, {x: 200});
TweenLite.to(object.scale, 1, {x: 2, y: 2});

```

With the PixiPlugin:

```js
var sprite = new PIXI.Sprite(texture);

TweenLite.set(sprite, { pixi: {
    alpha: 0.85,
    anchor: 0.5,
    scaleX: 0.7
}});

TweenLite.to(sprite, 1, {pixi: { x: 200, scale: 2}});
```


