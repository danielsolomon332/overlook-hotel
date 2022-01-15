import { expect } from 'chai';
import bookingData from './test-data/booking-data';
import Booking from '../src/classes/booking';

describe('Booking', () => {
  let booking;

  beforeEach(() => {
    booking = new Booking(bookingData[0]);
  });

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('Should have a booking id', () => {
    expect(booking.id).to.equal(bookingData[0].id);
  });

  it('Should have a userID', () => {
    expect(booking.userID).to.equal(bookingData[0].userID);
  });

  it('Should have a booking date', () => {
    expect(booking.date).to.equal(bookingData[0].date);
  });

  it('Should have a room number', () => {
    expect(booking.roomNumber).to.equal(bookingData[0].roomNumber);
  });

  it('Should have room service charges', () => {
    expect(booking.roomServiceCharges).to.equal(bookingData[0].roomServiceCharges);
  });
});
