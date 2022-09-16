
const JobListing = ({jobs}) => {


    return ( 
       <>
       {jobs.map(job => (
        <div className="jobListing" key={job.id}>
            <img src={job.logo} alt={job.company} className="logo" />
            <div className="jobDetails">
                <div>
                    <h2 className="company">{job.company}</h2>
                    {job.new === true ? <span className="newJob">NEW!</span> : null}
                    {job.featured === true ? <span className="featuredJob">Featured</span> : null}
                </div>
                <p className="position">{job.position}</p>
                <div className="metaDataContainer">
                    <p className="metaData">{job.postedAt}</p>
                    <p className="metaData">{job.contract}</p>
                    <p className="metaData">{job.location}</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="jobCategories">
                <span className="category">{job.role}</span>
                <span className="category">{job.level}</span>
                {job.languages.map(lang => <span className="category">{lang}</span>)}
                {job.tools.map(tool => <span className="category">{tool}</span>)}
            </div>
        </div>
       ))} 
       </>
     );
}
 
export default JobListing;