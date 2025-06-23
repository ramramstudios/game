const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const catImg = new Image();
catImg.src =
  'data:image/png;base64,' +
  'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAADAFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAA' +
  'AAAAAAAAAAAAAAAAAAAAAAAAAAADAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAACAgAAAAAAAAAAAAAC' +
  'AQAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAABAAAAAAAAAAAMCAMDAgABAAAAAAAAAAAEAwEAAAAAAAAA' +
  'AAAFAwEAAAAAAAAAAAAAAAAAAAAGAwEAAABQNxX0q0EAAAD/qkwAAAAAAAAIBQEAAAAAAAAdFAf0q0BO' +
  'NxX3qkH0qkH2rD8AAAAAAAALBwEAAAD1q0IAAAAAAAAWDwX0qkH1qkEAAABfQhkQCwVqSRwZEgYZEgYw' +
  'Ig41JQ4AAAAhFwkAAAA5JhAAAAAAAAAAAABoSRz0qkEGAwFZPxnPkDdFLxIAAADyqUFjRBoUDgX0qkEA' +
  'AAD0qkFXPBjzqUAzJA30qkL/gIAIBQJkUTYPCgX//wBMNBTzq0KFXSPWlTl1X0EA/wD0qkEAAAD///8B' +
  'AQAIBQLzqUDfmzsMCAPxqECAWSLqoz4kGQmMYSUaEgblnz2GXSPAhTNGMRNhQxkOCgXVlDn39vZYPRdA' +
  'LBHcmTtmRxs4Jg94UyDtpT8EAwEhFwkpHAqzfS8xIg0fFQiwei+UZyfwp0CXaSjLjTakcit0UR/Tkzin' +
  'dCw6KRDHizW6gTHnoT1pSRz+/ftcQBgWDwbDw8P7+/vS0tLSkje2fjB9WCFvTR29gzL2t15QOBX1rkpF' +
  'MBLpoT7ZlzozIw7DiDPinTwJBwTj4+ODWyP//v4uIAxLNBSQZCaueS74yIP4zIvupj9tTB3+9uqrdy30' +
  'rEXgnDz1slLp6en85cNVOxaIXiQQDQlDLhJGRkYXFxd9fX0hISEvLy7Yljn3vm04ODj+9+2JXyRBNyr9' +
  '8+X++vP0z5qBWiKfbyr51KCLi4u1tbXl5eX86s/A' +
  'Q9WKLEpESVmZuz3Dw5J7dij8zHi4wsGS27qriWN2YET21paA3B2chv8m+e/sH45WNNeNG7E7AAAAAElF' +
  'TkSuQmCC';

const dogImg = new Image();
dogImg.src =
  'data:image/png;base64,' +
  'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAADAFBMVEVHcEwAAAAEAwEAAAAAAAAAAAAA' +
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAwEAAAAAAAAAAAAAAAAAAAAAAAASDQUAAAAAAAAAAAAAAAAA' +
  'AAACAQAAAAAAAAAAAAAAAAAAAABrShwAAAANCQQXDwYAAAAAAABXPBcQCwQAAAAAAAAAAAAiGAkAAAAA' +
  'AAAAAAAAAADKjTUAAAAAAAAAAAAAAAAAAAAiEQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBwMAAAAAAAAA' +
  'AAAFAgIJBgIAAAA5KA8AAAAhFwkAAABFMBItHwxgQxmTZyh+WCIcEwiPYyZGMRJPNxUAAAByTx4vIQyh' +
  'cSyLYSVDLhIAAAAAAABMNBQAAABdQRgdFAhBLRHEiTUlGgoAAAA2JQ4xIg07FhJNHhhLHRdGMRMgFggQ' +
  'CwQTDgYPBQQAAAAbCwkAAAAXDwgQCwVNNRQAAAANCQPITjwaEgcAAABJMxNpSRw+KxBUOhYJBgK4fjH/' +
  'qlXxrD5KNBQTDQb1q0IvIQzTkzgAWgL0qkEAAADqWkcGBALzqUEBAQDwp0A/Pz9mRxu8gzIDAgEPCwXg' +
  'nDyHXiSWaSjTkzgRDAUIBQPKjTYtHwzEiTQfFQgVDwZ8VyHinTw5KA8qHQvupj/BhzNdQBg8KRDfmzvP' +
  'kDckGQkbEwdPNxXooT3Skji3fzCbbCmndSx6VSDpoz7dmTtRORYZEQc4Jw+7gjHWlTmMYSULBwPxqEDt' +
  'pT8nGwpHMRN3Uh+ebirlnz1pSRyrdy3kWEWodS3IizW0fTB2LiNnSByQZSZjRRpsTSE7OzuBWiKVZyja' +
  'mDpALRGteC4yIQ3moD3ZlzpYPRfFiTWwey/GijVxTh4dCwiHNChhQRodEwghFwk6GxFnJx+bOy6lciw0' +
  'JA4bGxs2NjacdkAVFRW4gDGgbyvMjjbaVEJYIhsRBwXpWke8SDmTZyeTOC1DIBTfVkQqEA1oLR8gFghM' +
  'NRRfKB2/hTNFNR56XTUPDw8zMzMxMTEhISFHcEzMlk+xAAABAHRSTlMA9P0d+/0B/gUCTV3njCn5YPFK' +
  'zer8fkQZZgf33qk04yP+whb4DMX08aZut+0JoSCY/T7QlFWx+tjuLlk6D2rzkwTJN/sT8WKCke39/M74' +
  '4ejf+1TO59fi4jGG8yzcw/T7rpzbYtjg8P63vbntm+/IZaD5vPr669L75fuJ/XcDJbvkSfeV////////' +
  '//////////////////////////////////////////////////////////////////////////////' +
  '//////////////////////////////////8A+vsoCAAABLRJREFUWMPtl3dck0cYxwOEJEyFyBIEQRSc' +
  'VVsHat2re++9994trV2f+2VBSBkJFCgjUZYiYAUFAUEtglSpo85qi3bvlu720/e9d2BCJvwpvz+44733' +
  'vrl77hn3SiTDGta5qPELZgVETQqIiBwKZLT/tLm+4BU4MeDCwWHOWxzCzPeecnHSpa0HzAam7zVtnueY' +
  'yOlSYMrlJh3htbberIV89q0eUZZNDwSkV80g1sqOT4U0aOZYdzE+Y5htRN+xlgzUO+lyZiwuaJw7nJFe' +
  'iL5tBnGgvHJzGGOt8CWuMLIg4JYPiVPllWuRsMIF6AKMuIG41PvHMdf59sIRfT1xQzW5UI53wvGXSy8j' +
  'bqlwHcY45oxNwbXETWUvx0JHHL8E3EPc1qfw8nEAWohFLe6DyNOYbZ+zIgQbPOCQmuWY6eDkHyQeqQBL' +
  'ZfYsLfU1eQbaGIYIO6C7kcS/kJlFm6wTZouNHzb26AmpaGzl/9+DyXZCdYRvJZ8wUMY2lgyg3hpUDjQy' +
  'LpRh/Ih3plR58ABQEG4Ut17KNvu1wDZrkBnoY5q9WM8/SMdFtpypKbiTH92EfbStLivdbA3SN5Wx55qJ' +
  'dP7BQYxS2CYPXCG8boDFuZEPYa/QzYW/DWgCruTHLMhxFR10g9y52EZcpNxrKz9WiXUuQBbkE/HlQGtQ' +
  'KK4Txj5GrgtQBRqErsZbbm2ka3C1MGZCkfsr2iKX+lmBIrBSGNuMd8+atMPA1cf8TLs2sthuLRjJZy1c' +
  '0z8pV6i02hLxWRXeE7rbkWCTikYhWxjMR3/y/wPGNKpeHBAfdnMey3lkuM3xT4S49k34QpyzG71pp7vS' +
  '/uk6DbXoXYdRwPeKwxBrm60xR9hQKbpF0Amoe/H5v/ibMVVVf8h9yfeacf6ANBuDdjGmaQTUsOD2IsY8' +
  '/3Ux8VtH46uQvQvUga/CmksQNSBoJ6FoC58sqCNVabn16zs7z5z5688O6q/7jbXssebwi1+PuKkDL0Mx' +
  'wo62qjOYWT9gt5jmPygWnbWHkH1o4hNbIkbaSWzzEcaZU5eDQnb7tQLoM+TxvZ0ws39414+H0s9ezp7M' +
  'T22mrl0Jw0YRJPhQKzqZFeeDplC9r/Qm+1e0EHSwFixDPJfFhKzTJxxYnlFroomtjrV7Im52UNdmwbuE' +
  'dVb0sWs5qMZh1qjFx4DjtCyU5FB2thHQE82LeELhqNQuRnKL5i0kc3beboR5B/mqB+ojaOjWVVSrUcue' +
  'fhOex8u6AqT4OKz9iqV4YyUCl3lraaXcWQcwv37k+7ZvAMaVtK2sg2Th2eA4eEMe6uzWp2RuYwskq9FA' +
  'z6mFCdlvT36tUqlO/cIUED3dnxFPSuZNkMeEOr0fKULnM7dp2UMw0FnHcPQ7FaeT2EPTSg6eopHg3n1U' +
  'cTuM9Rr2uI/yHNUuWps2GPCwwpMLst9dQFEz2YZd/aBqkvebFo8oPLyx35sImDLxqwD6HR01GUhdLfP4' +
  '7r/klZd07fhJAH2CQ7qk18cN6mtEsuZVpLZxnJ+NePvN1wb/gaTEKQ70o21y9lCrsOg5ltM2x27GcF+y' +
  'Z+D7+AP33/coXhg9xC/Ix6JpNVIGD/ljVBG7KiogViYZ1rDOSf0PXLdb9F7sc3AAAAAASUVORK5CYII=';

const player = {
  x: 32,
  y: 32,
  width: 32,
  height: 32,
  speed: 2
};

const dogs = [
  { x: canvas.width - 64, y: 32, width: 32, height: 32, speed: 1.5 },
  { x: canvas.width - 64, y: canvas.height - 64, width: 32, height: 32, speed: 1.5 }
];

const keys = {};
window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

function update() {
  if (keys['ArrowUp']) player.y -= player.speed;
  if (keys['ArrowDown']) player.y += player.speed;
  if (keys['ArrowLeft']) player.x -= player.speed;
  if (keys['ArrowRight']) player.x += player.speed;

  // boundaries
  player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

  dogs.forEach((d) => {
    const dx = player.x - d.x;
    const dy = player.y - d.y;
    const dist = Math.hypot(dx, dy);
    d.x += (dx / dist) * d.speed;
    d.y += (dy / dist) * d.speed;

    if (
      d.x < player.x + player.width &&
      d.x + d.width > player.x &&
      d.y < player.y + player.height &&
      d.y + d.height > player.y
    ) {
      alert('Game Over!');
      window.location.reload();
    }
  });
}

function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(catImg, player.x, player.y, player.width, player.height);
  dogs.forEach((d) => {
    c.drawImage(dogImg, d.x, d.y, d.width, d.height);
  });
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

catImg.onload = () => {
  dogImg.onload = () => {
    loop();
  };
};
