

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "6";
	obj.data["vipLuxuryExpire"] = "4092647115000";
	obj.data["time"] = "4092647115000";
	obj.data["isYearUser"] = "6";
	obj.data["vipmExpire"] = "4092647115000";
	obj.data["vipOverSeasExpire"] = "4092647115000";
	obj.data["vipExpire"] = "4092647115000";
	obj.data["vip3Expire"] = "4092647115000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 6;
	obj["isVIPLuxAutoPay"] = 6;
	body = JSON.stringify(obj);
}

$done({body});
