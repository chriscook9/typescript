//Boolean
var paidAccount = false;
//Number
var age = 33;
var taxRate;
number = 7.5;
//String
var fullName;
string = "Chris Cook";
//Array
var ages;
number[] = [33, 28, 11];
//Tuple
var player;
[number, string, number, number];
player = [3, 'Correa', .333, 33];
//Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
//Any
var apiData = [123, 'Jordan', false];
//Void
function printOut(msg) {
}
//# sourceMappingURL=007_types.js.map