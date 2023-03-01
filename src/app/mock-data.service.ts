import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const payments = [
        { id: 1, name: 'item1', amount: 10.99, currency: 'USD', methods: ['VISA', 'SEPA'] },
        { id: 2, name: 'item2', amount: 19.99, currency: 'EUR', methods: ['VISA', 'SEPA']  },
        { id: 3, name: 'item3', amount: 5.0, currency: 'EUR', methods: ['VISA', 'SEPA']  },
    ];

    return { payments };
  }
}
