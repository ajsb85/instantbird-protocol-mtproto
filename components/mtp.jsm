/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const API_ID=13297;
const API_HASH="35880a11f1251ee0d8b5a88083e9bacb";
const SERVER="173.240.5.1:443";
const SERVER_TEST="173.240.5.253:443";
const RSA_PUBLIC_KEY=""+
"-----BEGIN RSA PUBLIC KEY-----"+
"MIIBCgKCAQEAwVACPi9w23mF3tBkdZz+zwrzKOaaQdr01vAbU4E1pvkfj4sqDsm6"+
"lyDONS789sVoD/xCS9Y0hkkC3gtL1tSfTlgCMOOul9lcixlEKzwKENj1Yz/s7daS"+
"an9tqw3bfUV/nqgbhGX81v/+7RFAEd+RwFnK7a+XYl9sluzHRyVVaTTveB2GazTw"+
"Efzk2DWgkBluml8OREmvfraX3bkHZJTKX4EQSjBbbdJ2ZXIsRrYOXfaA+xayEGB+"+
"8hdlLmAjbCVfaigxX0CDqWeR1yFL9kwd9P0NsZRPsmoqVwMbMu7mStFai6aIhc3n"+
"Slv8kg9qv1m6XHVQY3PnEw+QQtqSIXklHwIDAQAB"+
"-----END RSA PUBLIC KEY-----";

const EXPORTED_SYMBOLS = ["mtp"];
const {interfaces: Ci, utils: Cu} = Components;

Cu.import("resource:///modules/imXPCOMUtils.jsm");
Cu.import("resource:///modules/imServices.jsm");

var mtp={
	api: function(method, param, callback){
	
	},
	sendCode: function(phone){
		mtp.api("auth.sendCode",{
			phone_number: phone,
			sms_type: 0,
			api_id: API_ID,
			api_hash: API_HASH
			
		});
	}
};
