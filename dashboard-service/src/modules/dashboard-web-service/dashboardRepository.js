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
    id: '99177bbb-c497-4fd0-9e0c-68aa73c6cf18',
    client: 'Fulano 01',
    deliveryPrevisionDate: '2022-04-10T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: 'e46b8def-0c32-49cc-97c1-c2a9ac87846b',
    client: 'Fulano 01',
    deliveryPrevisionDate: '2022-04-10T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '5ac326a3-03cc-4e94-a8ef-cfc3cfa16f0d',
    client: 'Fulano 02',
    deliveryPrevisionDate: '2022-03-05T20:05:58.554Z',
    status: 'pending',
  },
  {
    id: '92373e0d-0875-4951-b5d5-5b48d4c51dd9',
    client: 'Fulano 02',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'pending',
  },
  {
    id: '591ed89c-e282-407f-bf31-fa43bdf92fcc',
    client: 'Fulano 03',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'out-of-date',
  },
  {
    id: '3c59703b-bb9c-412e-8fe6-b1129c371091',
    client: 'Fulano 03',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '3320baff-343c-4271-a6f4-09b5f90d419c',
    client: 'Fulano 07',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: '6a4f90c7-5eb5-4346-bf89-c84f0116065f',
    client: 'Fulano 08',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: 'd6b617e9-c5b7-42ed-b7ae-e3afdeaa4f28',
    client: 'Fulano 09',
    deliveryPrevisionDate: '2022-03-06T20:05:58.554Z',
    status: 'finished',
  },
  {
    id: 'ce2fd546-2298-4236-9e45-41f5cbc683e9',
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
