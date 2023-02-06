import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a first meetup!'
    },
    {
      id: 'm2',
      title: 'A Second Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 10, 12345 Some City',
      description: 'This is a second meetup!'
    }
  ];

const HomePage=(props)=>{
 return <MeetupList meetups={props.meetups}/>
}
//get static props
// export async function getStaticProps(){
//   //will used to fetch data from api or database
// return{
//   props:{
//     meetups:DUMMY_MEETUPS
//   },
//   //it will run after every 10 sec so that if new data added then it will tackle that(after deployement)
//   revalidate:10
// }
// }
//get server side
 export async function getServerSideProps(context){
  const req=context.req;
  const res=context.res;
  return{
    props:{
      meetups:DUMMY_MEETUPS
    }
  }
 }

export default HomePage