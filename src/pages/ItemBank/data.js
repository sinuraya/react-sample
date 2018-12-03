import faker from 'faker';
import moment from 'moment';

export default (limit = 5, arrayData = false) => {
  const data = [];
  for (let i = 1; i <= limit; i++) {
    let row = null;
    if (arrayData) {
      row = [
        i,
        faker.random.words(),
        faker.random.words(),
        faker.hacker.noun(),
        moment(faker.date.recent()).format("DD-MM-YYYY hh:mm:ss")
      ];
    } else {
      row = {
        id: i,
        name: faker.random.words(),
        parent: faker.random.words(),
        category: faker.hacker.noun(),
        created: moment(faker.date.recent()).format("DD-MM-YYYY hh:mm:ss")
      };
    }
    data.push(row);
  }
  return data;
}