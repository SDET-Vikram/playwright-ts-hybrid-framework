import { test, expect } from '../../src/fixtures/test.fixture';

test.describe('Restful Booker bookings API', () => {
  test('returns a successful booking list response', async ({ restfulBookerClient }) => {
    const response = await restfulBookerClient.getBookingIds();

    expect(response.status()).toBe(200);

    const responseBody: unknown = await response.json();
    expect(Array.isArray(responseBody)).toBe(true);
  });
});
