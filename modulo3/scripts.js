// 1 Transforme os seguintes trechos de códigos utilizando async/await e jeitos mais simplificados:

/* 1.1 transforme a função a seguir:
const buscaUsuario = (usuario) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log('Usuário não existe');
    });
};
buscaUsuario('diego3g');
*/

const buscaUsuario = async (user) => {
  const github = await fetch(`https://api.github.com/users/${user}`);
  const usuario = await github.json();
  console.log(usuario);
};

buscaUsuario('Matheus-Bezerra');

/* 1.2 Transforme a função a seguir:
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
function umPorSegundo() {
  delay().then(() => {
    console.log('1s');
    delay().then(() => {
      console.log('2s');
      delay().then(() => {
        console.log('3s');
      });
    });
  });
}
umPorSegundo();
*/

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
};
umPorSegundo();
