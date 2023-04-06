function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResult(player) {
  try {
    const playerResult = await luckyDraw(player);
    console.log(playerResult);
  } catch (error) {
    console.error(error);
  }
}

getResult("Tina");
getResult("jorge");
getResult("Julien");
