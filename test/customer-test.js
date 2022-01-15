import { expect } from 'chai';
import customerData from './test-data/customer-data';
import bookingData from './test-data/booking-data';
import roomData from './test-data/room-data';
import Customer from '../src/classes/customer';

describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(customerData[0]);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should have an id', () => {
    expect(customer.id).to.equal(customerData[0].id);
  });

  it('Should have a name', () => {
    expect(customer.name).to.equal(customerData[0].name);
  });
});
