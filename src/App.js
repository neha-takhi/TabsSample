import React from "react";
import Tabs from "./Components/Tabs/Tabs";
import "./App.css";
import Card from './Components/Cards/Card'
const data = [
  {
    heading: "Authors",
    data: [
      {
        name: "Neha Vohra",
        title: "Global service Recruiting",
        location: "Global services New Delhi",
        email: "test1@test.com"
      },
      {
        name: "Ravi Kumar",
        title: "Consultant",
        location: "Mumbai",
        email: "test2@test.com"
      },
      {
        name: "Soniya Jain",
        title: "Senior Consultant",
        location: "Boston",
        email: "test3@test.com"
      }
    ]
  },
  {
    heading: "OriginalRequestor",
    data: [
      {
        name: "Ravi Kumar",
        title: "Consultant",
        location: "Mumbai",
        email: "test4@test.com"
      },
      {
        name: "Soniya Jain",
        title: "Senior Consultant",
        location: "Boston",
        email: "test5@test.com"
      }
    ]
  }
]

function showCards(dataArr){
  return dataArr.map((item,index)=>{
    return <Card index={index} heading={item.name} subHeading={item.title} content={item.location} email={item.email}/>
  })
}

function App() {
  return (
    <div className="app-container">
      <Tabs>
        {data.map((item,index)=>{
          return <div label={item.heading} count={item.data.length} key={'label'+index}>
          {showCards(item.data)}
         </div>
        })}
      </Tabs>
    </div>
  );
}

export default App;