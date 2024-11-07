import { useState } from "react";
import "./AboutPage.css";
function AboutPage() {
  const [name, setName] = useState("lany7");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setresult] = useState(0);
  const [box, setBox] = useState([]);
  const onChangeInfo = () => {
    setName("kisto");
    setGender("female");
    setAge(23);
  };
  const handleBackClick = () => {
    setName("");
    setGender("");
    setAge();
  };

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeInfoPassword = (event) => {
    setPassword(event.target.value);
  };
  const onLogin = () => {};

  const onchangeX = (event) => {
    setX(Number(event.target.value));
  };
  const onchangeY = (event) => {
    setY(Number(event.target.value)); //use for get value from control or input

    // const toCapitalize = (string)=>{
    //   return string.charAt(0).ToUpperCase()+string.slice(1);
    // }
  };
  var X = Number(x),
    Y = Number(y); //use for convert to number
  var data = 0;
  const onClickoparation = (type) => {
    switch (type) {
      case "sum":
        data = X + Y;
        break;
      case "sub":
        data = X - Y;
        break;
      case "mul":
        data = X * Y;
        break;
      case "div":
        data = X / Y;
        break;
    }
    setresult(type + " = " + data);
  };
  //can use this
  const onClickAddBok = () => {
    const temp = box;
    temp.push(1);
    setBox([...temp]); //... this fix in react
  };
  return (
    <div>
      <h1>
        <button onClick={onClickAddBok}>add</button>

        {box.map((index, item) => {
          return (
            <div
              style={{
                width: 30,
                height: 30,
                backgroundColor: "pink",
                margin: 5,
              }}
            ></div>
          );
        })}
      </h1>

      <input placeholder="username" onChange={onChangeUserName} />
      <input placeholder="password" onChange={onChangeInfoPassword} />
      <button onClick={onLogin}>Login</button>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>UserName: {username}</p>
      <p>PasWord : {password}</p>
      {/* <p>product[0] :{product[0]}</p> */}

      <button onClick={onChangeInfo}>Change User</button>
      <button onClick={handleBackClick}>Back</button>

      <h1>opration</h1>
      <input placeholder="value x" onChange={onchangeX} />
      <input placeholder="value y" onChange={onchangeY} />
      <h2>result : {result}</h2>
      <button onClick={() => onClickoparation("sum")}>sum</button>
      <button onClick={() => onClickoparation("sub")}>sub</button>
      <button onClick={() => onClickoparation("mul")}>mul</button>
      <button onClick={() => onClickoparation("div")}>div</button>
    </div>
  );
}

export default AboutPage;
