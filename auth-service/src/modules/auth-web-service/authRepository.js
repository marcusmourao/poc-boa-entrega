const users = [
  {
    name: 'Consultor 01',
    username: 'consultor@boaentrega.com.br',
    password: '49b38c3bdaac993c467f5ccb94b54eea29023278c83d626311815b60c788a8f2',
    roles: ['consultor'],
  },
  {
    name: 'Administrador 01',
    username: 'administrador@boaentrega.com.br',
    password: 'cea64cdb8539055e858f7550249d7d474330740ff819a1dfdc7603d127536ccd',
    roles: ['administrador'],
  },
  {
    name: 'Suporte 01',
    username: 'suporte@boaentrega.com.br',
    password: 'f05126159637210e2076c1e6e60ebc9994d96a0eb280a635eb34af071f75d56d',
    roles: ['suporte'],
  },
];

function login({
  username, password,
}) {
  return new Promise((resolve, reject) => {
    const user = users.find((item) => (item.username === username && item.password === password));

    if (user) {
      resolve(user);
    } else {
      reject(new Error('Invalid username or password'));
    }
  });
}

module.exports = {
  login,
};
