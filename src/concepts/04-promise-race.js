/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
  const renderValue = (value) => {
    element.innerHTML = value;
  };
  //Para que funciona, se pone a competir a todas las promesas para usar el que resuelva mas rapido
  //Solo vamos a usar la que se ejecuta mas rapido
  Promise.race([
    slowPromise(),
    fastPromise(),
    mediumPromise(),
    mediumPromise(),
    mediumPromise(),
    mediumPromise(),
  ]);
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("medium Promise");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast Promise");
    }, 1000);
  });
