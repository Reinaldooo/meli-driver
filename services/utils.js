export const oauthUrl =
  "http://auth.mercadolivre.com.br/authorization?response_type=code&client_id=3430047875313953&redirect_uri=https://apimegahack-v3.reinaldowft.com/auth";

export const formatDate = (date) => {
  let day = String(date.getDate());
  if (day.length < 2) {
    day = "0" + day;
  }
  let month = String(date.getMonth() + 1);
  if (month.length < 2) {
    month = "0" + month;
  }
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const packSizes = [
  {
    id: 1,
    title: "Mini",
    img: "https://i.imgur.com/RDMLTI4.png",
    count: 2,
    desc: "Pacote pesando entre 0.1 e 2KG"
  },
  {
    id: 2,
    title: "Pena",
    img: "https://i.imgur.com/VK8Z5ez.png",
    count: 2,
    desc: "Pacote pesando entre 2.1 e 5KG"
  },
  {
    id: 3,
    title: "Master",
    img: "https://i.imgur.com/zyPgLnB.png",
    count: 1,
    desc: "Pacote pesando entre 5.1 e 10KG"
  },
  {
    id: 4,
    title: "Jumbo",
    img: "https://i.imgur.com/4bNjbRt.png",
    count: 3,
    desc: "Pacote pesando acima de 10KG"
  },
];

export const packLevels = [
  {
    id: 5,
    title: "Diamante",
    img: "https://i.imgur.com/rngHBTU.png",
    count: 3,
    desc: "Pacote altamente delicado"
  },
  {
    id: 6,
    title: "Rubi",
    img: "https://i.imgur.com/XggwZpW.png",
    count: 3,
    desc: "Pacote moderadamente delicado"
  },
  {
    id: 7,
    title: "Citrino",
    img: "https://i.imgur.com/AJ3GFyF.png",
    count: 2,
    desc: "Pacote delicado"
  },
];

export const exampleDeliveries = [
  {
    id: 1,
    value: 10,
    neighborhood: "Jaguará",
    size: "Pena",
    level: "Diamante",
    date: "01/07/2020 - 14:12h"
  },
  {
    id: 2,
    value: 18,
    neighborhood: "Boa vista",
    size: "Jumbo",
    level: "Citrino",
    date: "01/07/2020 - 14:41h"
  },
  {
    id: 3,
    value: 11,
    neighborhood: "Boa vista",
    size: "Mini",
    level: "Citrino",
    date: "01/07/2020 - 15:32h"
  },
  {
    id: 4,
    value: 13,
    neighborhood: "Guarulhos",
    size: "Pena",
    level: "Rubi",
    date: "01/07/2020 - 15:53h"
  },
  {
    id: 5,
    value: 16,
    neighborhood: "Conceição",
    size: "Master",
    level: "Rubi",
    date: "01/07/2020 - 17:10h"
  },
]
