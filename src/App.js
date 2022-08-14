import React, { useState } from 'react';
import axios from 'axios';

// https://github.com/PHP-FFMpeg/PHP-FFMpeg
export default function App(){

    // const [apiResponse, setResponse] = useState(null);

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

    // axios({
  
    //     // Endpoint to send files
    //     url: "https://api.kanye.rest",
    //     method: "GET"
    //   })
    
    //     // Handle the response from backend here
    //     .then((res) => { data = res.data.quote; setResponse(data); console.log(apiResponse);  })
    
    //     // Catch errors if any
    //     .catch((err) => { console.log(err) });


        

    return (

        <div className="container">


            <input type="text" className="form-control" id="search-bar" placeholder="Search Issue" onChange={searchIssue} />

            
            <div className="table-container">

                <h2>List Of Issues</h2>

                <table className="table" id="table">
                
                    <tr><td>How to use silenceremove Filter?</td></tr>
                    <tr><td>Undefined array key "streams" when generating thumbnail</td></tr>
                    <tr><td>Method "Alchemy\BinaryDriver\AbstractBinary::getName()" might add "string" as a native return type declaration in the future</td></tr>
                    <tr><td>openAdvanced inputs use -ss 0 -t 3</td></tr>
                    <tr><td>How would I add the resize and crop filters at the same time</td></tr>
                    <tr><td>openAdvanced and clip err</td></tr>
                    <tr><td>How to delete multiple watermarks</td></tr>
                    <tr><td>Question: Is it possible to use this library to receive and convert live streams?</td></tr>
                    <tr><td>Mix MP3 and MP4</td></tr>
                    <tr><td>Can we use setInitialParameters for multi input purpose</td></tr>
                    <tr><td>Error Enconding Failed - CentOS</td></tr>
                    <tr><td>unlink Permission denied</td></tr>
                    <tr><td>Unable to load FFProbe</td></tr>
                    <tr><td>convert rtsp to web stream to watch in a browser</td></tr>
                    <tr><td>add possibility to read/output the manipulated media from/to a variable</td></tr>
                    <tr><td>Wrong output with Resize/inset</td></tr>
                    <tr><td>Protocol Options -protocol_whitelist</td></tr>
                    <tr><td>videos getting stuck</td></tr>
                    <tr><td>Fatal error when calling FFMpeg::create()</td></tr>
                    <tr><td>Fix issue with the progress listener when using Clip</td></tr>
                    <tr><td>How GPU-accelerated video processing with ffmpeg</td></tr>
                    <tr><td>doc directory not download ???</td></tr>
                    <tr><td>Chaining crop and watermark does not crop.</td></tr>
                    <tr><td>Concat mp3 produces Encoding failed exception</td></tr>
                    <tr><td>How to install without composer?</td></tr>
                    
                </table>
            </div>
            
        </div>
    )
}   