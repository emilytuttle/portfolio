import React, {useState} from 'react'
import qa from "../images/qa.jpg"
const Resume = () => {
  // Set the state. Make a new item and a function to change it, set the original state.
  const [jobNum, setJobNum] = useState('');
      
  // Function to change the value to the value in the input box
      const updateNum = (event) => {
        setJobNum(event.target.value);
      }
      // message will change based of the current state of the jobNum value

      let message = "";
       if (jobNum < 1) {
       message = "I hope you find a job soon!";
      }     else if (jobNum === '1') {  
        message = "Sounds like it must be a good job!";
      } else if (jobNum > 1 && jobNum < 5) { 
        message = "That's a reasonable amount of jobs!";
      } else if (jobNum >= 5) { 
        message = "That's a lot of jobs!";
      }

      //array with my work information that will be pulled
  const jobArray=[
    {
    'company':'Pomelo Travel',
    'position': 'Data Entry Clerk, Quality Assurance Specialist, Airfare Expert',
    'dates': 'August 2023 - Present',
    'responsibilties': 'Search flights, send emails, update website, find bugs or issues in website'
    },
    {
      'company': 'Jeweler',
      'position': 'Shipping Manager',
      'dates': 'March 2022 - Present',
      'responsibilties': 'Find and ship all sold items, handle returns, photograph incoming jewelry'
    },
    {
      'company': 'House & Home Appraisals',
      'position': 'Appraisal Assistant',
      'dates': 'Nov 2020 - July 2022',
      'responsibilties': 'Compiled data from multiple sources, including government sites and company collected data, to create detailed reports for lenders to make informed decisions on property values. '
    }
]
  return (
    
    <div>
      <img src={qa} alt="hero" class="hero-image"/>
      <div>How many jobs have you had in the last 5 years ?</div>
      <input
        type="text" value={jobNum} onChange={updateNum}placeholder="How many?"
      />
      <p>{message}</p>
      <div id="allJobs">
        {/* uses the array and creates a box for each of them with the right information */}
      {jobArray.map((job, index) => (
          <div key={index} className="job">
            <h3><strong>Position/Positions: </strong>{job.position}</h3>
            <p><strong>Company: </strong>{job.company}</p>
            <p><strong>Dates: </strong>{job.dates}</p>
            <p><strong>Responsibilties: </strong> {job.responsibilties}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Resume
