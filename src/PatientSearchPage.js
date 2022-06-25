import React, {useState } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function PatientSearchPage() {
  const patients=[
    {
        "DOB": 46753,
        "name": "Lee Prosacco",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 1",
        "id": "1"
    },
    {
        "DOB": 97976,
        "name": "Lynne Bashirian",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 2",
        "id": "2"
    },
    {
        "DOB": 8749,
        "name": "Megan Strosin",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 3",
        "id": "3"
    },
    {
        "DOB": 96551,
        "name": "Santos Quigley",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 4",
        "id": "4"
    },
    {
        "DOB": 16651,
        "name": "Ben Kerluke",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 5",
        "id": "5"
    },
    {
        "DOB": 94531,
        "name": "Kyle Harris",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 6",
        "id": "6"
    },
    {
        "DOB": 12475,
        "name": "Jeanne Boehm",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 7",
        "id": "7"
    },
    {
        "DOB": 62888,
        "name": "Mr. Lois Gutmann",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 8",
        "id": "8"
    },
    {
        "DOB": 96292,
        "name": "Jasmine Borer",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 9",
        "id": "9"
    },
    {
        "DOB": 75744,
        "name": "Lewis Rohan",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 10",
        "id": "10"
    },
    {
        "DOB": 94937,
        "name": "Celia Johns",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 11",
        "id": "11"
    },
    {
        "DOB": 97192,
        "name": "Deanna Sauer",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 12",
        "id": "12"
    },
    {
        "DOB": 63428,
        "name": "Norman Schumm",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 13",
        "id": "13"
    },
    {
        "DOB": 45318,
        "name": "Emily Hintz",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 14",
        "id": "14"
    },
    {
        "DOB": 39311,
        "name": "Roxanne VonRueden Sr.",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 15",
        "id": "15"
    },
    {
        "DOB": 71756,
        "name": "Owen D'Amore",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 16",
        "id": "16"
    },
    {
        "DOB": 9714,
        "name": "Benjamin Nienow",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 17",
        "id": "17"
    },
    {
        "DOB": 40249,
        "name": "Mabel Stroman",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 18",
        "id": "18"
    },
    {
        "DOB": 27125,
        "name": "Ms. Aaron DuBuque",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 19",
        "id": "19"
    },
    {
        "DOB": 66728,
        "name": "Bernice Swift DDS",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 20",
        "id": "20"
    },
    {
        "DOB": 79839,
        "name": "Louis Walker",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 21",
        "id": "21"
    },
    {
        "DOB": 28707,
        "name": "Shirley Kshlerin",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 22",
        "id": "22"
    },
    {
        "DOB": 91620,
        "name": "Cheryl Breitenberg",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 23",
        "id": "23"
    },
    {
        "DOB": 46191,
        "name": "Ignacio Hoppe",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 24",
        "id": "24"
    },
    {
        "DOB": 74214,
        "name": "Miss Kristin Schowalter",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 25",
        "id": "25"
    },
    {
        "DOB": 83925,
        "name": "Betsy Green",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 26",
        "id": "26"
    },
    {
        "DOB": 15106,
        "name": "Ms. Ricky Satterfield",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 27",
        "id": "27"
    },
    {
        "DOB": 4425,
        "name": "Dominick Brown",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 28",
        "id": "28"
    },
    {
        "DOB": 19352,
        "name": "Stella Hilll",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 29",
        "id": "29"
    },
    {
        "DOB": 24975,
        "name": "Elias Treutel",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 30",
        "id": "30"
    },
    {
        "DOB": 7106,
        "name": "Dr. Myron Lindgren",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 31",
        "id": "31"
    },
    {
        "DOB": 41357,
        "name": "Fredrick Stark",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 32",
        "id": "32"
    },
    {
        "DOB": 89458,
        "name": "Tiffany Labadie",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 33",
        "id": "33"
    },
    {
        "DOB": 3645,
        "name": "Andrew Altenwerth",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 34",
        "id": "34"
    },
    {
        "DOB": 90727,
        "name": "George Raynor",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 35",
        "id": "35"
    },
    {
        "DOB": 66779,
        "name": "Cassandra Wiegand",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 36",
        "id": "36"
    },
    {
        "DOB": 83939,
        "name": "Fernando Waelchi I",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 37",
        "id": "37"
    },
    {
        "DOB": 91464,
        "name": "Daisy Lebsack",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 38",
        "id": "38"
    },
    {
        "DOB": 94712,
        "name": "Noah Heller",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 39",
        "id": "39"
    },
    {
        "DOB": 37260,
        "name": "Lloyd Corwin IV",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 40",
        "id": "40"
    },
    {
        "DOB": 48446,
        "name": "Simon Bauch I",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 41",
        "id": "41"
    },
    {
        "DOB": 23546,
        "name": "Inez Ledner",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 42",
        "id": "42"
    },
    {
        "DOB": 54252,
        "name": "Cassandra Jacobi",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 43",
        "id": "43"
    },
    {
        "DOB": 50831,
        "name": "Mrs. Homer Zboncak",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 44",
        "id": "44"
    },
    {
        "DOB": 48653,
        "name": "Erica Hand",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 45",
        "id": "45"
    },
    {
        "DOB": 37176,
        "name": "Jerry Bernier",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 46",
        "id": "46"
    },
    {
        "DOB": 25172,
        "name": "Dr. Lindsay Hauck",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 47",
        "id": "47"
    },
    {
        "DOB": 97503,
        "name": "Evelyn Armstrong",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 48",
        "id": "48"
    },
    {
        "DOB": 1126,
        "name": "Rogelio Rosenbaum",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 49",
        "id": "49"
    },
    {
        "DOB": 76179,
        "name": "Marguerite Kirlin",
        "avatar": "http://loremflickr.com/640/480",
        "idp": "idp 50",
        "id": "50"
    }
]
  const [i,CHANGE]=useState(0);
  const [search,setsearch]=useState('');
  const patientsmap = (patients) => patients.map((e) => {
    return (
      <div key={e.id}> {patient(e)}</div>
    )
  })
  const handleSearchChange=()=>
  {
    CHANGE(0)
    patientsmap(patients.filter((p)=>{
      if(((p.name).toLowerCase()).includes(search.toLowerCase()))
      return p
    }).slice(i,i+10))
  }
 
    const patient = (e) => {
    return (
      <Card border="primary"   style={{ width: '18rem',marginBottom:"50px" }}>
        {/* <Card.Img variant="top" src={e.avatar} style={{borderRadius:"100px"}}/> */}
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go to profile</Button>
        </Card.Body>
      </Card>
    )
  }
  return (
    <div>
      <input  value={search}  placeholder="Search...."   onChange={ (e)=>{setsearch(e.target.value);handleSearchChange()}}   style={{width:"600px", height:"50px", borderRadius:"50px"}}/>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {
        (!search.length&&patientsmap(patients.slice(i,i+10)))
        ||(search.length&&patientsmap(patients.filter((p)=>{
          if(((p.name).toLowerCase()).includes(search.toLowerCase()))
          return p
        }).slice(i,i+10)))  
      }
    </div>
    <button onClick={()=>{i&&CHANGE(i-10)}}>PREVIOUS</button>
    <button onClick={()=>{(i+10<patients.length)&&CHANGE(i+10)}}>NEXT</button>
    </div>
  )
}
