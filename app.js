/******************* Javascript Method Practice ******************/

/*********************** String Method ***********************/
//method humaray pass kuch action hotay hai jinn ko hum performed kertay hai 

/************ Method Format ***********/
//method ko likhnay ka humaray pass format yeh hota hai pehlay string kay variable ka naam likha jata hai phir dont(.) lagha kay method likh ker phir hum apnay method ka naam likh rahay hotay hai 


/*************** Trim Method **************/
//jab bhi hum kisi string kay start mai aur last mai additional whitespaces daytay hai whitespaces means extra space ya jo hum nay starting mai spaces di hai aghir inn spaces ko string kay andar say hatana hai tu uss kay liye hum trim method ka use kertay hai hum simply string ka naam likhtay hai aur phir .trim aur phir apnay paranthesis Aur uss kay baad yeh whitespaces ko hata ker aik new string return karey ga
/*Example
let msg = "              Hello                 ";
let email = prompt("Set your Email");
let newemail = email.trim();
console.log(newemail); */
//iss ka uss hum kisi bhi string kay first aur last ki space ko remove kernay kay liye hota hai trim say humari porani wali string mai koi changing nahi atay bulkay woh kud say new string create kerkay dayta bina first aur last space kay


/********************* String *******************/
//js kay andar string immutable hoti hai means hum string kay andar koi changing nahi la sakhtay jab hum iss per koi method ya action perform kerty hai porani wali string asay hi rehti hai aur aik new string create ho jati hai
//hum apni string ko uper aur lower case mai bhi ker skhtay hai
//str.toUpperCase();
//str.toLowerCase();
//Example
/*let name = "Meanahil";
let msg = "error";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());*/

/************ String Argument ************/
//iss mai hum hum value ko pass kertay hai iss mai sub say pehlay index ata hai iss mai hum jo bhi search ker rahay hai humay nahi milta tu uss ki jagah per output -1 ata hai aur jo cheez search kernay per mil jati hai tu uss ka index humaray output mai print ho ker ata hai
//Example
/*let msg = "ILove Coding";
msg.indexOf("Love");*/


/******************* Method Channing ****************/
//iss mai hum saray method aik aik kay baad likh sakhtay hai yani maultiple method hum likh sakhtay hai 
//Example
/*let msg = "                    hello                          " ;
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);*/


/****************** Slice Method ******************/
//slice original string ka aik part humay return kerta hai as a new string slice kay andar hum generally do argument ko pass kertay hai
//Example
/*let msg = "Hello";
console.log(msg.slice(0, 6));
console.log(msg.slice(1, 6));
console.log(msg.slice(-2)); //4-2*/
//slice kay andar tin tareequ say argument ho sakhta hai aik hun sakhta starting + ending index aur dosra ho sakhta hai kay hum nay directly starting index pass kia aik ho sakhta hai hum nay apni negative value ko pass kia hai as a index


/**************** Replace Method *****************/
//string kay andar kisi bhi aik value ko search kerta hai aur jesi hi woh value mil jati hai ussay aik new value kay saat replaced kerkay humay aik new string return ker dayta hai
//Example
/*let msg = "ILoveCoding";*/

/*************** Repeat Method **************/
//means string ko repeat kervana hai aur kitni dafa repeat karana hai 
//Example
/*let msg = "ILoveCoding";
let fruit = "Papaya";*/


/////Practice
//let msg = "Hello!";
//console.log(msg.trim().toUpperCase());

//let name = "Mano";
//console.log(name.slice(1, 4));
//console.log(name.indexOf("no"));
//console.log(name.replace("Mano", "Meanahil"));


/******************** Array(Data Structure) *****************/
//Array humaray pass collection for different items hotay hai iss kay andar hum aik single variable likh ker bohot saray item uss mai store kerva sakhtay hai 
//Example
//let student1 = "Mano";
//let student2 = "Mani";
//let student3 = "Mono";
//hum iss multiple format ko single variable kay andar bhi likh sakhtay hai woh humaray pass array kehlai gay aur jiss tarah string kay index hotay hai wesi hi Array kay bhi index hotay hai
//Example
//let student = ["Mano", "Mani", "Mono"];
//console.log(student);
//data structure means hum unn structure ko kehtay hai jo data store kervanay kay kaam atay hai
//Array js kay andar object typed kay hotay hai 
//Example
//let masks = [100, 99, 89, 76, 80];
//console.log(masks);

//let info = ["Mano", 100, 99.89];
//console.log(info);
//hum different different item ko aik single Array kay andar store kerva sakhtay hai 
//Array mutable hotay hai hum iss kay andar ki value ko change ker sakhtay hai humay new Array ki zarrorat nahi parhey gi bulkay ussi Array mai changes ker sakhtay hai
//let name = "Mano";
//console.log(name[0] = "I");
//issi tarah humaray pass array kay kuch method hotay hai 
/*Example
push: add to end;*/
//iss say hum Array kay andar aghir koi item last mai print kervana chatay hai tu kerva sakhtay hai 
//Practice
//let colorCar = ["blue-car", "red-car", "dark-car"];
//console.log(colorCar.push("marinda-car"));
//pop: delete end & return it;
//issi tarah humaray pass pop-method hota hai Means Array kay end mai jo element hai woh waha say delete ho jye ga aur humay return ho ker mil jye ga
//console.log(colorCar.pop());
//iss tarah aghir humay Array mai start mai kuch item print kervana hota hai tu hum iss ka use kertay hai
//unshift: add to start;
//console.log(colorCar.unshift("purple-color"));
//aur Array kay starting say delete kerna hota hai tu hum iss ka use kertay hai
//shift: delete start & return it;
//console.log(colorCar.shift());

//jiss tarah string method kay andar indexof ka use hota hai ussi tarah Array mai bhi indexof ka use hota hai iss mai aghir Array mai uss element ko mil jye ga tu woh uss element ka index print ker day ga
/***************** Include Method ******************/
//jiss tarah humaray pass indexOf method hota hai ussi tarah humaray pass include method hota hai jesay indexof kisi cheez ko search kerta hai aur jesi hi woh huma mil jata hai tu uss ka index print kerdayta hai aghir woh cheez nahi milti tu index mai -1 print kervadayta hai ussi tarah include hota hai jo kisi value ko search kerta hai aghir woh value humay mil jati hai tu uss case mai humay true return kerta hai aghir woh cheez nahi milti tu uss case mai humaray pass false return hota hai


/*********************** Concat Method ***********************/
//concat means concatenated yeh do string ko jornay kay kaam ata hai issi tarah ka concatenation humay array kay andar dekhnay ko milta hai 
//Practice
//let primary = ["red", "yellow", "blue"];
//let secondary = ["orange", "marinda", "violent"];
//console.log(primary.concat(secondary));


/****************** Reverse Method *******************/
//humaray array jiss tarah print hua yeh ussi tarah uss method ko reverse kerday ga means jiss sequence mai array hai woh ussi tarah reverse kerday ga
//let medium = ["orange", "marinda", "violent"];
//console.log(medium.reverse());


/**************** Array Slice Method *****************/
//means kisi original array ki aik part ki copy la ker dayta hai iss mai humay likhna hota hai kay starting say layker kaha ki ending tak copy chai yehi same cheez hum nay string mai sikhi thi wesi hi array mai hoti hai bas slice array method mai sirf itna farq hota hai kay yeh start say lay ker end copy ker kay dayta hai iss mai start aur end optional argument hota hai 
//let arrayMethod = ["red", "yellow", "blue"];
//console.log(arrayMethod.slice(1));

//let methodShow = ["red", "yellow", "blue", "darkblue", "violent"];
//console.log(methodShow.slice(1, 4));
//iss kay andar negative value bhi hoti hai jo array ki last vlue say count hoti hai woh humari negative value hoti hai =


/*************** Splice Method ***************/
//iss mai element ko remove kernay kay liye aur replace ker nay kay liye aur new element ko add kernay kay liye iss ka use kia jata hai 
// Aur splice kay andar 3 parameters hai jinn ko hum add ker sakhtay hai first parameter starting index hota hai aur dosra hota hai start say lay ker kitna humay delete kerna hai iss kay liye hum iss delete count ka use kertay hai yeh Optional hota hai aur uss kay bad hum apnay alak alak element ko add ker sakhtay hai yeh original Array mai changing kerta hai aur iss kay andar humarah ending index nahi hota hai
//iss kay andar multiple argument hotay hai
//Practice
//let methodSplice = ["Array", "String", "Number", "Method"];
//console.log(methodSplice.splice(1));
//let practiceSplice = ["red", "yellow", "blue", "gray"];
//console.log(practiceSplice.splice(0, 0, "maruta", "xuv"));
//console.log(practiceSplice.splice(1, 0, "marsides"));
//console.log(practiceSplice.splice(1, 1, "gwagon"));


/******************* Sort Array method ******************/
//sort means hum Element ko asending ascending aur descending order mai arranged kerday means small say lay ker large tak ya large say lay ker small tak jiss ko hum descending kehtay hai jesay iss order mai hum apnay element ko arranged kerday tu iss kay liye hum sort method ka use kertay hai 
//Example
//let chars = ["b", "d", "a", "c"];
//console.log(chars.sort());
//sort phelay humari value ko internally string mai converted karey ga aur phir sorting karey ga number ki bases per humaray pass sorting nahi hoti tu sorting ka hum Array mai waha use ker sakhtay hai jab Array mai Character ya string value available hogi


/****************** Practice Question *******************/
//let months = ["junauary", "july", "March", "August"];
//console.log(months.splice(0, 2, "July", "june"));

//let lang = ["c++", "Python", "javascript", "html", "css", "c#"];
//console.log(lang.reverse().indexOf("javascript"));


/**************** Array Referencse *****************/
//jab bhi js kay andar koi Array create hota hai tu uss humarah aik references variable create hota hai aur array kay variable kay naam ko hum references kehtay hai yeh variable unn value ko restore nahi kervata bulkay address ko store kervata hai tu variable ki value tu koi aur hoti hai but variable reference ko iss ka address pata hota hai 
//Example
//let arr = ["a", "b", "c", "d"];
//let arrCopy = arr;
//console.log(arr == arrCopy);
//console.log(arr.push("d"));
//console.log(arrCopy.pop());


/******************* Constant Array *******************/
//iss mai hum Array kay normal variable ko constant mai create kertay hai 
//Example
//const arr = [1, 2, 3, 4];
//console.log(arr);
//console.log(arr.push(5));
//console.log(arr.pop());
//array kay agay constant likhnay ka matlab yeh nahi hota kay humari value constant ho jye gi bulkay Array mai humarah variable constant ho jata hai hum iss same Array nahi create ker sakhtay 


/******************* Nested Arrays *******************/
//means aik cheez kay andar similar cheez ko insert kerna wesi hi hum Array ka concept banatay hai uss ko hum nested Array kehtay hai ya phir hum inn ko multiple dimensional Arrays bhi keh sakhtay hai
//Example
//let nums = [ [1, 2], [3, 4], [4, 5] ];
//console.log(nums);
//hum aik Array ko sequence kay andar visualize kertay hai per jab bhi hum iss mai variable create kertay hai tu uss ko hum column aur rows say visiualize kertay hai aur iss mai column aur row utnay hi hogay jitnay humaray aray mai element majood hai aur iss element ko access kernay kay liye hum pehlay variable likhtay hai phir column aur row likhtay hai
//Example
//console.log(nums[2][0]);


/****************** Practice Question ******************/
//let ticToeGame = [ ["X", null, "0"], [null, "X", null], ["0", null, "X"] ];
//console.log(ticToeGame);
//console.log(ticToeGame[0][1] = "0");



















































































































































































































































































































