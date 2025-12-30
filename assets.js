// assets.js - Хранилище твоих рисунков
const assets = {
    towerImg: new Image()
};

// Загружаем твою картинку (убедись, что на GitHub файл называется towers.png)
assets.towerImg.src = 'towers.png'; 

function drawTowerAsset(ctx, obj, vX, vY, s) {
    if (!assets.towerImg.complete) {
        // Пока картинка грузится - рисуем стандартный квадрат
        ctx.fillStyle = obj.side === 'player' ? '#00fbff' : '#F44336';
        ctx.fillRect(vX - 25*s, vY - 25*s, 50*s, 50*s);
        return;
    }

    // Твоя картинка делится пополам по вертикали
    const frameW = assets.towerImg.width / 2;
    const frameH = assets.towerImg.height;
    
    // 0 - левая часть (синяя), frameW - правая часть (красная)
    let sx = obj.side === 'player' ? 0 : frameW;
    
    ctx.drawImage(
        assets.towerImg, 
        sx, 0, frameW, frameH, 
        vX - 40 * s, vY - 70 * s, // Позиция (чуть выше центра)
        80 * s, 110 * s           // Размер башни
    );
}