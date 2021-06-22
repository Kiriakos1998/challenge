import React from 'react';
import './App.css';
// class that models user record data
class UserRecord {
  constructor(id,firstName,lastName,createdTimestamp,isAdmin){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.createdTimestamp=createdTimestamp;
    this.isAdmin=isAdmin;
  }
}
// function that creates random integer numbers withing the min max-1 interval
function randomNum(min,max){
  return Math.floor(min + Math.random() * (max - min));
}
//function that models the card view for one user record
export class CardComponent extends React.Component{
  render(){
    return(
// seperate view in one image and one div with user record data
// props carries the userRecord item that will be passed as input
// parameter to the CardComponent instance when it is created
  <div class="cardCSS">
  <img src="human.png" class="imgCSS"></img>
<div class="dimensions">
<div class="borderBottom">Id: {this.props.userRecord.id}</div>
<div class="borderBottom">First Name: {this.props.userRecord.firstName}</div>
<div class="borderBottom">Last Name: {this.props.userRecord.lastName}</div>
<div class="borderBottom">Time Stamp: {this.props.userRecord.createdTimestamp}</div>
<div >Admin Status: {this.props.userRecord.isAdmin}</div>
</div>
  </div>
    );
  }
}
// Component that models the list of cards
export class CardPage extends React.Component {
  render() {
// initialize a pool of some values for user record
    const names=["Jina","Jake","Terri","Reimon","Kevin","Scali","Hitskok"];
    const sirname=["Laneti","Peralta","Holt","Durant","Diaz","Tokin","Gauf"];
    const timeStamps= ["23:09:19-18:13:19", "19:11:19-14:13:14" , "25:10:19-14:13:14","23:10:19-14:13:19","23:06:12-13:10:14",
  "23:02:11-19:14:10","02:12:12-15:15:14","28:07:20-21:13:19","22:15:16-23:16:13"];
  const status=["yes","no"];
// initialize variable that will be returned
  const items=[];

// create 30 card instances and push them into items
for (var i=0; i< 30 ; i++)
{
    items.push(<div class="itemCSS"><CardComponent userRecord= {new UserRecord(randomNum(1,100),names[randomNum(0,7)],sirname[randomNum(0,7)],timeStamps[randomNum(0,9)],status[randomNum(0,2)])}/></div>);
}
    return(
// return a 30-CardComponent list
      <div>
{items}
</div>
);
  }
}
// class that models MainPage
export class MainPage extends React.Component{
  constructor(){
    super();
// initialize pageController to 0 meaning user is at logIn state
    this.state={pageController: 0
    };
  }
  // function called when user clicks log in with inputs parameters
  // user the input of username and pass the input of password
checkUsPass= (user,pass) =>{
// check if both are non empty
  if (user && pass)
  {
    // change the state of pageController to 1 meaning user logged in
    // this will trigger render() function in order to change the screen
    this.setState((state)=>{

      return { pageController: 1 };

    }

  );
  alert("Welcome "+ user);
  }
  // if one of them at least is empty ask for valid username and password
else {
  alert("please enter valid username and password");
}
}
logOut(){
  this.setState((state)=>{

    return { pageController: 0};

  }

);
}
  render(){
    // if pageController is 1 the load CardPage Component

if(this.state.pageController===1){

  return (
<div class="parentCardList">

<div>
    <CardPage/>
    </div>
    <button class="logOut" onClick={()=>{this.logOut()}}>Log out</button>
</div>
  );

}
// else load log in form
  else{
return(
    <div class="parent">
<div class="container">
  <div class="formCSS">
  <input type="text"  id="user" class = "inputStyle" placeholder="Username"/>
<input type="text" id="pass" class = "inputStyle" placeholder="Password" />
<button  onClick={()=>{this.checkUsPass(document.getElementById('user').value,document.getElementById('pass').value)}} class="buttonCSS"> Log in </button>
  </div>
</div>
</div>
);
  }
  }
}
// simply return MainPage
export  function App() {
return <MainPage/>;
}







export default App;
