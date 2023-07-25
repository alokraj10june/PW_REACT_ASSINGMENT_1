
import CounterApp from './CounterApp';
import Person from './Person';
import Comp from './Comp';
import Comp2 from './Comp2';
import Avatar from './Avatar';
import Button from './Button';
import Header from './Header';
import List from './List';

//import {Comp,Image} from "./Comp"

function App() {
  return (
    <>
    {/* <Avatar src="" width="100px" height="100px"/>
      <Avatar>
    <span>child tag</span>
    </Avatar> */}
      <Person name="Alok Raj"  age="25"/>
      <Button text="clicked me" onClick={() => console.log("Button clicked")}/>
      <List items="apple" />
      <List items="banana"/>
      {/* <Header title="HELLO"/>
        <CounterApp/>
        
       
      <Comp/>
      <Comp2 name="burno" Image="https://hips.hearstapps.com/hmg-prod/images/wolf-dog-breeds-siberian-husky-1570411330.jpg?crop=1xw:0.84375xh;center,top" alt=''/>
      <Comp2 name="tiger" Image="https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg" alt=''/>
        */}
       
    </>
  );
}

export default App;
