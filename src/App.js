import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://github.com/PHP-FFMpeg/PHP-FFMpeg
export default function App(){

    const [issues, setIssues] = useState([]);

    function searchIssue() {

        var input, filter, table, tr, td, txtValue;
        input = document.getElementById("search-bar");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                } else {
                tr[i].style.display = "none";
                }
            }       
        }
    }



    useEffect(() => {

        async function fetchIssues(){

            const response = await fetch("https://api.github.com/search/issues?q=repo:PHP-FFMpeg/PHP-FFMpeg");
            const data = await response.json();
            console.log(data.items);
            setIssues(data.items);
        }
        
        fetchIssues();

    }, []);


    return (

        <div className="container">


            <input type="text" className="form-control" id="search-bar" placeholder="Search Issue" onChange={searchIssue} />

            
            <div className="table-container">

                <h2>List Of Issues</h2>

                <table className="table" id="table">

                    {
                        issues.map(issue=>{

                            return <tr key={issue.id}><td>{issue.title}</td></tr>;
                        })
                    }
                
                    
                </table>
            </div>
            
        </div>
    )
}   