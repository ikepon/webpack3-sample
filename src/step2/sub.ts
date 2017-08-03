export const hello = (message: string): void => {
  document.body.innerHTML = (`${message}`);
  console.log(`${message}を出力しました`);
};
