"use strict";
//task 2
// let personName:string=" Eric";
// console.log("Hello"+personName+ +" "+"would you like to learn some Python today?");
// task 3
// let personName : string ="Zain Raza";
//lowercase
// console.log(personName.toLowerCase());
// uppercase
// console.log(personName.toUpperCase());
// titlecase
// console.log(personName.replace(/\b\w/g,c=>c.toUpperCase()));
Object.defineProperty(exports, "__esModule", { value: true });
// task 4
// let quote:string =" A person who never made a mistake never tried anything new."
// let author:string="Albert Einstein"
// console.log(author+" "+ "once said" +quote);
//task 5
// let quote:string =" A person who never made a mistake never tried anything new."
// let famous_person:string = "Albert Einstein ";
// let message:string = `${famous_person} once said "${quote}"`;
// console.log(message);
//task 6
// let personName:String="\t\n ali raza\n\t";
// console.log("Stripping "+personName.trim());
//task 7 && task 8
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// task 9
// let FavoriteNumber:number=5;
// console.log(`My FavoriteNumber  is ${FavoriteNumber}.`);
//task 10
//author: [zain raza]
// date: [saturaday , march 2,2024]
// task 11
// let names:string[] = ["ZainRaza","Muhammad Kazim","Muzamil","kumail","muntazir","Raza"]
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// console.log(names[5]);
// task 12
// let names: string[] = ["ZainRaza", "Muhammad Kazim", "Muzamil", "kumail", "muntazir", "Raza"]
// let message: string = " Do you like to play cricket ?";
// console.log(names[0] +" " + message);
// console.log(names[1] +" " + message);
// console.log(names[2] +" " + message);
// console.log(names[3] +" " + message);
// console.log(names[4] +" " + message);
// console.log(names[5] +" " + message);
// Task 13
// let transpotation: string[] = ["Honda Motocycle", "Audi", "Honda city", "mehran "];
// transpotation.map((items) => console.log(`i Would like to own a ${items}`)
// )
// Task 14
// let guestArr: string[] = ["Muhammad Kazim", "Muzamil", "kumail",];
// guestArr.map((items) => (console.log(`Dear ${items}, you are invited dinner`)));
// Task 15
// let guestArr: string[] = ["Muhammad Kazim", "Muzamil", "kumail", "muntazir"];
// let canNotAttend: string = "muntazir";
// // console.log(canNotAttend + " " + " can not attend the dinner");
// let newGuest: string = "Ghulam Abbas";
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
//  guestArr.map((items) => (console.log(`Dear ${items}, you are invited dinner`)));
// Task 16
// let guestArr: string[] = ["Muhammad Kazim", "Muzamil", "kumail", "muntazir"];
// let canNotAttend: string = "muntazir";
// let newGuest: string = "Ghulam Abbas";
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// // part 2
// let guestbeg: string = "Zain Raza";
// guestArr.unshift(guestbeg);
// // guestArr.map((items) => (console.log(`Dear ${items}, I found  a bigger  dinner table so i am invited more people`)));
// // part3
// let middleGuesst: string = "Ghulam Ali";
// let middleIndex = guestArr.length / 3;
// guestArr.splice(middleIndex, 0, middleGuesst);
// console.log(guestArr);
// //part 4
// guestArr.push("Ahrum");
// console.log(guestArr);
// guestArr.map((items) => (console.log(`Dear ${items}, you are invited in the  more  people list on  dinner`)));
// task 17
// let guests:string[]=["Alimehdi","Ahrum","Aliya","Sakina","Kazim"];
// // console.log("Due to limited space,only two people  can be invited for dinner");
// while (guests.length>2) {
//     const removeguest=guests.pop();
//     console.log(`Sorry ,${removeguest}, you're no longer invited to dinner`);
// }
// guests.forEach((guests)=>{
// console.log(`Dear ${guests}  you're still invited to dinner`);
// });
// task 18
// let placetovisit:string[]=["Iran","Iraq","Canada","America","China"];
// console.log("Original order:",placetovisit);
// console.log("Alphabetical order:",[...placetovisit].sort());
// console.log("Original order after sorting:",placetovisit);
// console.log("Reverse alphabetical order:",[...placetovisit].sort().reverse());
// console.log("Original order after reverse sorting:",placetovisit);
// // console.log("");
// placetovisit.reverse();
// console.log("Reverse order:",placetovisit);
// placetovisit.reverse();
// console.log("Back to original order:",placetovisit);
// placetovisit.sort();
// console.log("Sorted in alphabetical order:",placetovisit);
// task 19
// let invitations:string[]=["alimehdi","ahrum"];
// let count_invitations:number=invitations.length;
// console.log(`${count_invitations}, people will come to the dinner`);
// task 20
// let country :string[] =["Pakistan","Iran","Iraq","Amercian","Canada"];
// console.log("List of country");
// console.log(country);
// task 21
// let person:{name:string,fname:string,age:number}={name:"zain",fname:"Male",age:20};
// console.log(person);
// task 22
// const days:string[]=["sunday","monday","tuesdays","wednesdays","thursday","friday","staurday"];
// // console.log(days{7});
// console.log(days[6]);
//task 23
// let car="subaru";
// console.log("is car == 'subaru'? predict  true");
// console.log(car=="subaru");
// console.log("is car !='Honda city'? predict true");
// console.log(car !='Honda city');
// console.log("s car == 'subaru'? predict  true");
// console.log(car=="subaru");
// console.log("is car == 'SUBARU'? predict  false");
// console.log(car=="SUBARU");
// console.log("is car.length == 6 ? predict true");
// console.log(car.length==6);
// console.log("is car.length != 10 ? predict true");
// console.log(car.length!=10);
// console.log("is 10> 45 ? predict false ");
// console.log(10>45);
// console.log("is 3< =2 ? predict false ");
// console.log(3<=2);
// console.log("is 72> =*3 ? predict false ");
// console.log(72>=83);
// console.log("is 3> =2 ? predict false ");
// console.log(3>=2);
// task 24
// let name_1:string="zain";
// let name_2:string="Zain Raza";
// let name_3:string="Zain Raza Lakhapurwala";
// if(name_1 == name_3){
// console.log("name are equal");
// }
// else {
// console.log("name are not equal");
// }
// if(name_1!=name_2){
//     console.log("name are  equal");
// }
// else{
//     console.log("name are not equal");
// }
// if(name_1!=name_3){
//     console.log("name are  equal");
// }
// else{
//     console.log("name are not equal");
// }
//  let age_1: number=18;
//  let age_2: number=22;
//  if(age_1 == 18){
//     console.log("Eligible for vote");
//  }
// if(age_1 != 22){
//         console.log("Eligible for vote in older category");
//      }
//      if(age_1 <= age_2){
//         console.log("younger");
//      }
//      if(age_2 >= age_1){
//         console.log("older");
//      }
// if(age_1 == 18 || age_2 !=22){
//     console.log("person is eligable for vote");
// }
// let country  :string []= ["Pakistan","india","China","Iran"]
// // if (country.includes("Pakistan")) {
// //     console.log("Pakistan is in country list ");
// // }
// if(country.includes("America")){
//     console.log("AMercia is not include an array");
// }
//task 25
// point 1
// let alien_color: string ="green";
// if(alien_color== "green"){
//     console.log("you are earn 5 point");
// }
//point 2
// let alien_color: string ="red";
// if(alien_color== "green"){
//         console.log("no output");
//     }
// task 26
// let alien_color: string ="red";
// if(alien_color== "green"){
//     console.log(" player just earned 5 points for shooting the alien.");
// }
// else{
//    console.log("player just earned 10 points.");
// }
// task 27 
// let alien_color: string ="red";
// if(alien_color== "green"){
//     console.log(" 5 point");
// }
// else if (alien_color=="yellow "){
//    console.log(" 10 points.");
// }
// else if(alien_color=="red"){
//     console.log("15 point ");
// }
// task 28
// let age:number =18;
// if(age<2){
//     console.log("you are baby");
// }
// else if(age>2 && age<4){
// console.log(" you are  toddler");
// }
// else if(age>4 && age<13){
//     console.log(" you are  Kids");
//     }
// else if(age>13 && age<20){
// console.log(" you are teenager ");
// }
// else if(age>20 && age<65){
//     console.log(" you are adult ");
//     }   
//     else{
//         console.log("you are elder");
//     }
// task 29
// let favorite_fruits:string[]=['apple','peach','mango','berry','kivi'];
// if(favorite_fruits.includes('apple')){
// console.log("apple");
// }
// if(favorite_fruits.includes('mango')){
//     console.log("mango");
// }
// if (favorite_fruits.includes('apple')) {
//     console.log("apple");
// }
// if (favorite_fruits.includes('kivi')) {
//     console.log("you really like bananas");
// }
// if (favorite_fruits.includes('peach')) {
//     console.log("you really like bananas");
// }
// task 30
// let users:string[] =["admin","haseeb","ali","hasan","fatima"]; 
// for(let user of users){
//     if(user==="admin"){
//         console.log("Hello admin, would like to see a status report ?");
//     }
//     else{
//         console.log(`Hello ${user} ,thank you for logging again`);
//     }
// }
// task 31
//  let users:string[] =["admin","haseeb","ali","hasan","fatima"]; 
// users=[]
// if(users.length===0){
//     console.log("We need to find some users !");
// }
//task 32
// let current_user :string []= ["Admin","Ertic","Ali","Hazma","Fatima"];
// let new_users:string []= ["Admin","Sakina","Muslim","Hazma","Ahmed"];
// let current_user_lower:string []=current_user.map(user=>user.toLocaleLowerCase());
// for(let new_user of new_users){
//     if(current_user_lower.includes(new_user.toLocaleLowerCase())){
// console.log(`Sorry ${new_user},that name is taken`);
//     }
//     else{
//         console.log(`Yes ${new_user}, is still  in avaible list`);
//     }
// }
//task 33
// let numbers:number[]=[1,2,3,4,5,6,7,8,9];
// for(let number of numbers)
// if(number === 1){
// console.log(`${number}st`);
// }
// else if(number === 2){
//     console.log(`${number}nd`);
// }
// else if(number === 3){
//     console.log(`${number}rd`);
// }
// else{
//     console.log(`${number}th`);
// }
// task 34
// let favorite_pizza:string[]=["pepperoni","chicken","veg","tikka"];
// // for(let pizza of favorite_pizza){
// //     console.log(pizza);
// // }
// // console.log("\n");
// for(let pizza of favorite_pizza){
//     console.log(`I really like ${pizza} pizza !`);
// }
// console.log("\n I really love pizza !");
// task 35
// let animals:string[]=["cat","dog","goat","cow"];
// for(let animal of animals){
//     console.log(`A ${animal} has a tail`);
// }
// console.log("\n all  of these are great pets!but i love cats more ");
// task 36 
// function makeShirt(size:string, text:string ):void {
// console.log(` you order a ${size} shirt shirt that says ${text}`);
// }
// makeShirt('large','"i love typescript')
// makeShirt('medium','"i need a big shirt')
// task 37
// function makeShirt(size:string = 'large', text:string="i love typescript" ):void {
// console.log(`you have order  a ${size},shirt that says ${text}`);
// }
// makeShirt();
// makeShirt("medium")
// //different message
// makeShirt("small","i need a big shirt in wear")
// task 38
// function describe_city(city:string , country:string="Pakistan"):void{
// console.log(`${city} is in ${country}`);
// }
// describe_city('karachi');
// describe_city('Tehran','Iran');
// describe_city('Najaf','Iraq');
//task 39
// function citycountry(city:string ,country:string){
// return `${city},${country}`
// }
// let c1=citycountry('Lahore','Pakistan');
// let c2=citycountry('Tehran','Iran');
// let c3=citycountry('Baghdad','Iraq');
// console.log(c1);
// console.log(c2);
// console.log(c3);
// task 40
// function make_ablumn(artist:string, title:string):{artist:string,title:string}{
// const dictionaries={
//     artist:artist.charAt(0).toUpperCase()+artist.slice(1),
//         title:title.charAt(0).toUpperCase()+title.slice(1)
// };
// return dictionaries;
// }
// let album=make_ablumn("ali","light")
// console.log(album);
// album=make_ablumn("hamza","red wave")
// console.log(album);
// album=make_ablumn("bilal","seenbreez")
// console.log(album);
// task 41
// function show_magicians(magicians: string[]) :void {
// for(const magician of magicians){
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
// }
// }
// const magician: string[] = ["mehdi","muslim","david blaine"];
// show_magicians(magician);
// task 42
// function make_great(magicians:string[]):void{
// for(var i=0; i<magicians.length; i++){
//     magicians[i] = magicians[i] +     "  the great";
// }
// }
// const magicians2:string[] = ["mehdi","muslim","david blaine"];
// make_great(magicians2);
// show_magicians(magicians2);
// task 43
// function make_great2(magicians:string[]):string[]{
// const greatMagicians:string[]=[];
// for(var i=0; i<magicians.length; i++){
//     greatMagicians.push(magicians[i] + " the great");
// }return magicians;
// }
// const magicians3 :string[]=["mehdi","muslim","david blaine"];
// const greatMagicians:string[]= make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(magicians2);
// task 44
// function sandwich(...items: string[]):void{
// console.log("Sandwich order :");
// for(let i=0; i<items.length; i++){
// console.log(`- ${items[i]}`);
// }
// }
// console.log("enjoy your sandwich zain raza");
// sandwich('capsicum','tomoato','chicken');
// sandwich('beef','cheese');
// sandwich('garlic chicken','mayo sauce');
// task 45
// type car={
//     manufacture:string;
//     model:string;
//     [key:string]:any;
// }
// function Createcar(manufacture:string, model:string,  optional:Record<string,any>):car{
//     return{
//         manufacture,
//         model,
//         ...optional,
//     }
// }
// const mycar:car=Createcar("toyota","corolla",{color:"sliver",year:"2024"});
// console.log(mycar);
