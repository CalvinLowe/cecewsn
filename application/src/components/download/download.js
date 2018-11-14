import React, { Component } from 'react';

/**
 * Defines the download componenet. Renderes the download page when the download URL is reached.
 */
export default class Download extends Component {
    constructor(props) {
		super(props);
		this.state = {
            files: null
		};

		// Bind functions
        this.downloadHandler = this.downloadHandler.bind(this);
        this.getFileList = this.getFileList.bind(this);
        this.createNodes = this.createNodes.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
    }
    
    render() {
        return (
            <main className="download">
                <h1>Downloads</h1>
                <div id="files">
                </div>
            </main>
        );
    }

    // When the component is rendered, fetch the files contained in the S3 server.
    componentDidMount() {
        this.getFileList(`backend/aws/download/listing.php`);
    }                        

    // Fetch the files stored in the S3 server.
    getFileList(url = ``) {
        console.log("Get file list called.");
        return fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
        .then(response => response.json()) // parses response to JSON
        .then(response => {
                            if (response.response === 'success') {
                                this.setState({files: response.files}); // set state in download.js
                                // TODO: Set response files to an state
                                this.createNodes(this.state.files);
                            }
        });
    }

    // Download the file contained on the server
    downloadHandler(event) {
        console.log("Download file called!");
        this.downloadFile(`backend/aws/download/download.php`, {"userName": "123456", "jobNumber": "789", "filePath": event.target.href});
        //event.preventDefault();
    }

    // Create the list of files contained on the server
    createNodes(files) {
        var fileContainer = document.getElementById("files"); // get the download container
        var newList = document.createElement("ul"); // create a new list
        newList.className = "download__list";

        for (var i = 0; i < files.length; i++) {
            var newListItem = document.createElement("li");
            newListItem.className = "download__list__item";
            newList.appendChild(newListItem);

            var newLink = document.createElement("a"); // create a new link for each file
            newLink.className = "download__link"; // add the class to the link
            newLink.href = "backend/aws/download/" + files[i];
            newLink.addEventListener("click", this.downloadHandler);
            newLink.download = "";
            
            var newFile = document.createTextNode(files[i]); // get the text representing the file
            
            newListItem.appendChild(newLink)
            newLink.appendChild(newFile); // add the file text to the link
            fileContainer.appendChild(newListItem); // add the links to the download container
        }
    }

    // Download the file to the server
    downloadFile(url = ``, data = {}) {
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                //"Content-Disposition": "attachment"
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()) // parses response to JSON
        .then(response => {
                            if (response.response === 'success') { // TODO: No response so far
                                //files = response.files; // set state in download.js
                                // TODO: Set response files to an state
                                
                            }
        });
    }
}