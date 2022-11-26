import { expect } from 'chai';
import { StackbitApi } from './stackbit-api';

describe('watheia.api/stackbit/api-stackbit', () => {
  it('MAY be constructed with a factory method', async () => {
    const api = await StackbitApi.get();
    expect(api).to.be.instanceOf(StackbitApi);
    // expect(api.props).to.have.property('site');
    // expect(api.objects).to.have.length.greaterThan(0);
    // expect(api.pages).to.have.length.greaterThan(0);
  });
});
