import React from 'react';
import { Bookmark } from 'lucide-react';
import Card from './Card';

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://images.rapidload-cdn.io/spai/ret_blank,q_lossless,to_avif,w_460,h_460/https://estateandprobatelawyer.com/wp-content/uploads/2025/05/Google-2025-G-logo.webp",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "California, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$58/hour",
    location: "London, UK"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/021/514/825/original/microsoft-software-brand-logo-symbol-with-name-design-illustration-with-black-background-free-vector.jpg",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Software Engineer Intern",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://www.pngmart.com/files/23/Adobe-Logo-PNG-HD-Isolated.png",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.wbt_7DXd4voBHjXNQ_3KCgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Uber",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$62/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.Zv0YJ6WsiatPPOaF-BxvsAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Oracle",
    datePosted: "7 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "New York, USA"
  }
];
  return (
   <div className='parent'>
    {jobOpenings.map(function(elem, idx){
    
      return <div key={idx}>
      <Card company={elem.name} posted={elem.datePosted}  post={elem.post} logo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
    </div>
    })}
   </div>
  );
};

export default App;