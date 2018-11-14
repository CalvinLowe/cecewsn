/**
@author: Calvin Lowe [Yggdrasil]
@date: 19.09.18
**/

import React, { Component } from 'react';

// Components
import Button from './../buttons/button';

// CSS
import './upload.css';
import './progressBar.css';

/**
 * Defines a drag and drop file uploader.
 */
export default class Dropbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            isHighlighted: false
        };
        // Bind the event handlers
        this.dragEnter = this.dragEnter.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.drop = this.drop.bind(this);
    }

    render() {
        return (
            <div
                id="dropbox"
                className = {this.state.isHighlighted === true ? 'dropbox dropbox--highlight' : 'dropbox'}
                onDragEnter = {this.dragEnter}
                onDragLeave = {this.dragLeave}
                onDragOver = {this.dragOver}
                onDrop = {this.drop}>
                <FileUploadForm />
            </div>
        );
    }

    // Event handlers
    dragEnter(event) {
        this.setState({
            isHighlighted: true
        });
        event.stopPropagation();
        event.preventDefault();
    }
    
    dragLeave(event) {
        this.setState({
            isHighlighted: false
        });
        event.stopPropagation();
        event.preventDefault();
    }
    
    dragOver(event) {
        this.setState({
            isHighlighted: true
        });
        event.stopPropagation();
        event.preventDefault();
    }

    drop(event) {
        this.setState({
            isHighlighted: false
        });
        event.stopPropagation();
        event.preventDefault();
    
        // Get the files from the drop event
        var dataTransferFiles = event.dataTransfer.files;

        // Update the fileList
        for (var i = 0; i < dataTransferFiles.length; i++) {
            updateFileList(dataTransferFiles[i]);

        }
        
        // Update the file input
        // Note: currently unable to append new files to the fileInput
        //fileInput.files = dataTransferFiles;

        updateProgressBar(fileList);
    }
}

/**
 * Defines a upload form.
 */
class FileUploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.browse = this.browse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="upload" action="" method="post" encType="multipart/form-data">
                <h2 className="upload__heading">Drop files here or click browse to upload</h2>
                <h3>Instructions:</h3>
                <ol>
                    <li>Your first file should be a target .xlsm file.</li>
                    <li>Your second file should be a Low_Energy .CDF file.</li>
                    <li>Your third file should be a High_Energy .CDF file.</li>
                </ol>
                <h3>Allowed filetypes:</h3>
                <ul>
                    <li>.xlsx</li>
                    <li>.cdf</li>
                </ul>
                <div id="fileProgress"></div>
                <label htmlFor="sampleFiles" className="button button--small browse__button">Choose your files:</label>
                <input
                    id="sampleFiles"
                    name="sampleFiles"
                    type="file"
                    ref={this.fileInput}
                    multiple="multiple"
                    onChange={this.browse}
                />                
                <Button
                    className="button button--large upload__button"
                    id="submit"
                    type="submit"
                    value="Upload files"
                    handler={this.handleSubmit} />
            </form>
        );
    }

    browse(event) {
        var fileInput = document.getElementById("sampleFiles");
        for (var i = 0; i < fileInput.files.length; i++) {
            fileList.push(fileInput.files[i]);
        }
        updateProgressBar(fileList);
    }

    handleSubmit(event) {
        if (fileList.length > 0) {
            for (var i = 0; i < fileList.length; i++) {
                let currentFile = fileList[i];
                fileUpload(currentFile, i);
             }
        }
        event.preventDefault();
    }

}

/*=============================================================================
#   File list
=============================================================================*/
var fileList = [];

function updateFileList(file) {
    fileList.push(file);
}

/*=============================================================================
#   Remove file
=============================================================================*/
function removeFile(event) {
    var fileIndex = event.target.parentElement.childNodes[1].id.slice(-1); // Get the file index
    fileList.pop(fileIndex); // Remove the file from the fileList
    event.target.parentElement.remove(); // Remove the progress bar
    event.preventDefault();
}

/*=============================================================================
#   Progress bar
=============================================================================*/
function updateProgressBar(fileList) {
    let fileProgress = document.getElementById("fileProgress");
    fileProgress.innerHTML = '';
    for (var i = 0; i < fileList.length; i++) {
        var newProgressBar = `
        <div id="file${i}" class="progress">
            <span>Status</span>
            <span id="fileName${i}">${fileList[i].name}</span>
            <span id="fileType${i}">(${fileList[i].size})</span>
            <progress id="progressBar${i}" value="0"></progress>
            <button id="progressCancelButton${i}" class="progress__removeButton">x</button>
        </div>`;
        /*var newProgressBarWithRadioButtons = `
        <div id="file${i}" class="progress">
            <button id="progressCancelButton${i}" class="remove">x</button>
            <span id="fileName${i}">${fileList[i].name}</span><span id="fileType${i}">(${fileList[i].size})</span>
            <progress id="progressBar${i}" value="0"></progress>
            ${fileList[i].type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ?`
            <input type="radio" id="lowEnergy${i}" name="energy${i}"
               value="Low_Energy" />
            <label for="lowEnergy${i}">Low_Energy</label>
            <input type="radio" id="highEnergy${i}" name="energy${i}"
               value="High_Energy" />
            <label for="highEnergy${i}">High_Energy</label>` : ``}
        </div>`;*/
        fileProgress.insertAdjacentHTML('beforeend', newProgressBar);

        var cancelProgress = document.getElementById(`progressCancelButton${i}`);
        cancelProgress.addEventListener("click", removeFile, false);
    }
}

/*=============================================================================
#   Request & Upload
=============================================================================*/
function fileUpload(currentFile, i) {
    let url = "backend/aws/upload/upload.php";
    let formData = new FormData();
    let request = new XMLHttpRequest();
    let progressBar = document.getElementById(`progressBar${i}`);
    
    request.open("POST", url, true);

    // Update the progress bar
    request.upload.onprogress = function(evt) {
        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            progressBar.value = percentComplete;
            console.log("Upload: " + parseInt(percentComplete * 100, 10) + "% complete");
        }
    };

    // TODO: Need to handle more ready states and status request
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            //alert(request.responseText); // handle response.
            console.log("Upload complete");
        }
    };

    // Add the file to the formData
    formData.append('uploadedFile', currentFile);

    // Set request headers
    if (i === 1) {
        request.setRequestHeader("energy", "Low_Energy");
    } else if (i === 2) {
        request.setRequestHeader("energy", "High_Energy");
    }

    // Initiate a multipart/form-data upload
    request.send(formData);
}