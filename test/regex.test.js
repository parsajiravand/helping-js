'use strict';

const { RX_EMAIL, RX_URL, RX_IP, RX_IPV4, RX_IPV6, RX_HEX_COLOR } = require('../core/regex');
const { RX_PHONE_US, RX_PHONE_IR } = require('../core/phones-regex');
const { RX_CURRENCY_USD } = require('../core/currencies-regex');

describe('regex', () => {
  describe('RX_EMAIL', () => {
    it('matches valid email', () => {
      expect(RX_EMAIL.test('a@b.co')).toBe(true);
      expect(RX_EMAIL.test('user@example.com')).toBe(true);
    });
    it('rejects invalid', () => {
      expect(RX_EMAIL.test('invalid')).toBe(false);
      expect(RX_EMAIL.test('@.com')).toBe(false);
    });
  });

  describe('RX_URL', () => {
    it('matches http(s) URL', () => {
      expect(RX_URL.test('https://example.com')).toBe(true);
      expect(RX_URL.test('http://foo.bar/path')).toBe(true);
    });
    it('rejects non-URL', () => {
      expect(RX_URL.test('not a url')).toBe(false);
    });
  });

  describe('RX_IP (IPv4 alias)', () => {
    it('matches IPv4 address', () => {
      expect(RX_IP.test('192.168.1.1')).toBe(true);
      expect(RX_IP.test('0.0.0.0')).toBe(true);
    });
    it('rejects URL', () => {
      expect(RX_IP.test('http://example.com')).toBe(false);
    });
  });

  describe('RX_IPV4', () => {
    it('matches valid IPv4', () => {
      expect(RX_IPV4.test('255.255.255.255')).toBe(true);
    });
    it('rejects invalid', () => {
      expect(RX_IPV4.test('256.1.1.1')).toBe(false);
    });
  });

  describe('RX_IPV6', () => {
    it('matches valid IPv6', () => {
      expect(RX_IPV6.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
    });
  });

  describe('RX_HEX_COLOR', () => {
    it('matches hex color', () => {
      expect(RX_HEX_COLOR.test('#fff')).toBe(true);
      expect(RX_HEX_COLOR.test('#ffffff')).toBe(true);
    });
  });

  describe('phones', () => {
    it('RX_PHONE_US matches US format', () => {
      expect(RX_PHONE_US.test('5552345678')).toBe(true);
      expect(RX_PHONE_US.test('+1-555-234-5678')).toBe(true);
    });
    it('RX_PHONE_IR matches Iran format', () => {
      expect(RX_PHONE_IR.test('+989121234567')).toBe(true);
    });
  });

  describe('currencies', () => {
    it('RX_CURRENCY_USD matches USD format', () => {
      expect(RX_CURRENCY_USD.test('1,234.56')).toBe(true);
    });
  });
});
