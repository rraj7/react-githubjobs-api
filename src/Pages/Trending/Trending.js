import axios from "axios";
import "../../App.css";
import { useEffect, useState } from "react";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  //const configheader = {"Content-Type": "application/json","Access-Control-Allow-Origin": "*" };
  
  const fetchTrending = () => {
    const {data} =  axios.get(
        "https://apple-host-tree.herokuapp.com/api/githubJobs/fetch",{
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
    ).then(function (response) {setContent(response)})
    .catch(function(error) {console.log(error)})
    .finally(console.log("Done!!!!"));
    
   // setContent(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending Jobs</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.company_logo}
              title={c.title}
              date={c.created_at}
              location={c.location}
              type={c.type}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;