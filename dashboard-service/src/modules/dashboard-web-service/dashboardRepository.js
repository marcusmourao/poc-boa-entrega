const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']

const getDeliveriesPerMonth = () => ({
  labels,
  datasets: [
    {
      label: "2021",
      data: labels.map(() => parseInt(Math.random() * 1000, 10)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "2022",
      data: labels.map(() => parseInt(Math.random() * 1000, 10)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
});
const getMonthlyRevenue = () => ({
  value: 340782.58,
  date: '2022-04-10T20:05:58.554Z',
});
const getLastDeliveries = () => [
  {
    id: '6259e0909a60508d53d382e2',
    client: 'Fulano 01',
    deliveryPrevisionDate: '2022-04-10T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '6259e0b7c76d65a29755fde0',
    client: 'Fulano 01',
    deliveryPrevisionDate: '2022-04-10T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '6259e0c37d29135e1f819cbb',
    client: 'Fulano 02',
    deliveryPrevisionDate: '2022-03-05T20:05:58.554Z',
    status: 'pending',
  },
  {
    id: '6259e0cf4db9bc2be969c658',
    client: 'Fulano 02',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'pending',
  },
  {
    id: '6259e0da8020908575eff606',
    client: 'Fulano 03',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'out-of-date',
  },
  {
    id: '6259e0e39f363dfd8714a5d8',
    client: 'Fulano 03',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '6259e0ed29afecc8a270a4ac',
    client: 'Fulano 07',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '6259e0f748a8ea7593c8f5ee',
    client: 'Fulano 08',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '6259e100489181caad814c26',
    client: 'Fulano 09',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '6259e10950cdc03c61ab81cb',
    client: 'Fulano 10',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
];

function getDashboard() {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        deliveriesPerMonth: getDeliveriesPerMonth(),
        monthlyRevenue: getMonthlyRevenue(),
        lastDeliveries: getLastDeliveries(),
      });
    } catch (e) {
      reject(new Error('Internal server error'));
    }
  });
}

module.exports = {
  getDashboard,
};
