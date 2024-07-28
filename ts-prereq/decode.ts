import bs58 from 'bs58';

const kp = bs58.decode(
	'3rEZm5huaoumJ9gZhSUojCScbgB8tWp79rswDPeg5QBtnajVkBe2BZzjCcG3cr6jstWU8UVPnBmtdGVtmw8sbq8Y'
);

console.log('My Secret key is:', kp);
