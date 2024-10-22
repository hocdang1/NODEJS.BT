const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 60,
  width: 50,
  height: 50,
  color: "white",
  speed: 5,
  dx: 0
};

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  player.x += player.dx;

  // Giới hạn di chuyển trong khung
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  
  requestAnimationFrame(update);
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function stopMove() {
  player.dx = 0;
}

// Lắng nghe sự kiện phím
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowLeft') {
    moveLeft();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    stopMove();
  }
});

update();

const enemies = [];
const enemyWidth = 50;
const enemyHeight = 50;

function createEnemy() {
  const x = Math.random() * (canvas.width - enemyWidth);
  enemies.push({ x, y: 0, width: enemyWidth, height: enemyHeight, speed: 2 });
}

function drawEnemies() {
  enemies.forEach((enemy) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  });
}

function updateEnemies() {
  enemies.forEach((enemy, index) => {
    enemy.y += enemy.speed;
    if (enemy.y + enemy.height > canvas.height) {
      enemies.splice(index, 1); // Xóa kẻ thù khi nó ra khỏi khung
    }
  });
}

setInterval(createEnemy, 1000); // Tạo kẻ thù mỗi giây

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawEnemies();
  updateEnemies();

  player.x += player.dx;
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  
  requestAnimationFrame(update);
}

const bullets = [];
const bulletWidth = 5;
const bulletHeight = 10;
const bulletSpeed = 7;

function shoot() {
  bullets.push({
    x: player.x + player.width / 2 - bulletWidth / 2,
    y: player.y,
    width: bulletWidth,
    height: bulletHeight,
    speed: bulletSpeed
  });
}

function drawBullets() {
  bullets.forEach(bullet => {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  });
}

function updateBullets() {
  bullets.forEach((bullet, index) => {
    bullet.y -= bullet.speed;
    if (bullet.y + bullet.height < 0) {
      bullets.splice(index, 1); // Xóa đạn khi ra khỏi khung
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    shoot();
  }
});

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawEnemies();
  drawBullets();
  updateEnemies();
  updateBullets();

  player.x += player.dx;
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  
  requestAnimationFrame(update);
}
function checkCollisions() {
    bullets.forEach((bullet, bulletIndex) => {
      enemies.forEach((enemy, enemyIndex) => {
        if (
          bullet.x < enemy.x + enemy.width &&
          bullet.x + bullet.width > enemy.x &&
          bullet.y < enemy.y + enemy.height &&
          bullet.y + bullet.height > enemy.y
        ) {
          // Xóa đạn và kẻ thù khi va chạm
          bullets.splice(bulletIndex, 1);
          enemies.splice(enemyIndex, 1);
        }
      });
    });
  }
  
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawEnemies();
    drawBullets();
    updateEnemies();
    updateBullets();
    checkCollisions();
  
    player.x += player.dx;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    
    requestAnimationFrame(update);
  }