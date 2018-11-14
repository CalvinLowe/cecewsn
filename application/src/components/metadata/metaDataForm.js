import React, { Component } from 'react';

/**
 * Defines the metaDataForm component. This is a complex form used for submitting meta data about
 * the users aparatus. It is currently not in use.
 */
export default class UploadSingleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleFile: '',
            sampleLocation: 0,
            sampleType: '',
            sampleDate: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Sample location: ' + this.state.sampleLocation);
        alert('Sample type: ' + this.state.sampleType);
        alert('Sample date: ' + this.state.sampleDate);
        alert(
            `Selected file: ${
                this.fileInput.current.files[0].name

            }`
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <fieldset id="sampleFile">
                    <legend>Upload your sample file.</legend>
                    <label>
                        Upload file:
                        <input
                            type="file"
                            name="sampleFile"
                            ref={this.fileInput}
                        />
                    </label>
                </fieldset>

                <fieldset id="sampleInformation">
                    <legend>Fill out your sample information</legend>
                    <label>
                        Sample location:
                        <input
                            type="number"
                            name="sampleLocation"
                            value={this.state.sampleLocation}
                            onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Sample type:
                        <select
                            name="sampleType"
                            value={this.state.sampleType}
                            onChange={this.handleInputChange} >
                            <option value="1">Sample type 1</option>
                            <option value="2">Sample type 2</option>
                            <option value="3">Sample type 3</option>
                        </select>
                    </label>

                    <label>
                        Sample date:
                        <input
                            type="date"
                            name="sampleDate"
                            value={this.state.sampleDate}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </fieldset>

                <fieldset id="sampleInformation">
                    <legend>My HRMS Instruments</legend>
                    <label>
                        Brand:
                        <input
                            type="text"
                            name="hrmsBrand"
                            value={this.state.hrmsBrand}
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <label>
                        Model:
                        <input
                            type="text"
                            name="hrmsModel"
                            value={this.state.hrmsModel}
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <label>
                        Class:
                        <input
                            type="text"
                            name="hrmsClass"
                            value={this.state.hrmsClass}
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <label>
                        Sources:
                        <input
                            type="text"
                            name="hrmsSources"
                            value={this.state.hrmsSources}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button value="Add">Add</button>
                    <button value="Remove">Remove</button>
                </fieldset>

                <fieldset id="chromatographySystem">
                    <legend>My Chromatography Systems</legend>
                    <fieldset id="currentChromatographySystem">
                        <legend>System</legend>
                        <label>
                            Chromatography system:
                            <select
                                name="chromatographySystem"
                                value={this.state.chromatographySystem}
                                onChange={this.handleInputChange} >
                                <option value="1">Chromatography system 1</option>
                                <option value="2">Chromatography system 2</option>
                                <option value="3">Chromatography system 3</option>
                            </select>
                        </label>
                        <label>
                            Brand:
                            <select
                                name="chromatographySystemBrand"
                                value={this.state.chromatographySystemBrand}
                                onChange={this.handleInputChange} >
                                <option value="1">Chromatography system brand 1</option>
                                <option value="2">Chromatography system brand 2</option>
                                <option value="3">Chromatography system brand 3</option>
                            </select>
                        </label>

                        <label>
                            Class:
                            <select
                                name="chromatographySystemClass"
                                value={this.state.chromatographySystemClass}
                                onChange={this.handleInputChange} >
                                <option value="HPLC">HPLC</option>
                                <option value="UHPLC/UPLC">UHPLC/UPLC 2</option>
                                <option value="SFC">SFC</option>
                            </select>
                        </label>
                        <button value="Add">Add</button>
                        <button value="Remove">Remove</button>
                    </fieldset>
                    <fieldset id="currentChromatographyComponent">
                        <legend>Component 1</legend>
                        <label>
                            Component:
                            <select
                                name="chromatographySystemComponent"
                                value={this.state.chromatographySystemComponent}
                                onChange={this.handleInputChange} >
                                <option value="Autosampler">Autosampler</option>
                                <option value="Controller">Controller</option>
                                <option value="Degasser">Degasser</option>
                                <option value="Oven">Oven</option>
                                <option value="Pump">Pump</option>
                                <option value="Valve">Valve</option>
                            </select>
                        </label>
                        <label>
                            Brand:
                            <input
                            type="text"
                            name="chromatographySystemBrand"
                            value={this.state.chromatographySystemBrand}
                            onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Model:
                            <input
                            type="text"
                            name="chromatographySystemModel"
                            value={this.state.chromatographySystemModel}
                            onChange={this.handleInputChange}
                            />
                        </label>
                        <button value="Add">Add</button>
                        <button value="Remove">Remove</button>
                    </fieldset>


                </fieldset>

                <fieldset id="chromatographyColumns">
                    <legend>My Columns</legend>
                    <label>
                        Brand:
                        <select
                            name="chromatographyColumnBrand"
                            value={this.state.chromatographyColumnBrand}
                            onChange={this.handleInputChange} >
                            <option value="Phenonmenex">Phenonmenex</option>
                            <option value="Waters">Waters</option>
                        </select>
                    </label>

                    <label>
                        Model:
                        <select
                            name="chromatographyColumnModel"
                            value={this.state.chromatographyColumnModel}
                            onChange={this.handleInputChange} >
                            <option value="Value 1">Value 1</option>
                        </select>
                    </label>
                    <label>
                        Serial number:
                        <input
                            type="number"
                            name="chromatographyColumnSerialNumber"
                            value={this.state.chromatographyColumnSerialNumber}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Phase:
                        <select
                            name="chromatographyColumPhase"
                            value={this.state.chromatographyColumPhase}
                            onChange={this.handleInputChange} >
                            <option value="Value 1">Value 1</option>
                        </select>
                    </label>
                    <label>
                        Pore Size (&#8491;):
                        <input
                            type="number"
                            name="chromatographyColumnPoreSize"
                            value={this.state.chromatographyColumnPoreSize}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Particle Size (&mu;m):
                        <input
                            type="number"
                            name="chromatographyColumnParticleSize"
                            value={this.state.chromatographyColumnParticleSize}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Length (mm):
                        <input
                            type="number"
                            name="chromatographyColumnLength"
                            value={this.state.chromatographyColumnLength}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Diameter (mm):
                        <input
                            type="number"
                            name="chromatographyColumnSerialDiameter"
                            value={this.state.chromatographyColumnSerialDiameter}
                            onChange={this.handleInputChange} />
                    </label>
                    

                    <button value="Add">Add</button>
                    <button value="Remove">Remove</button>
                </fieldset>

                <fieldset id="acquisitionMethods">
                    <legend>HRMS</legend>
                    <label>
                        HRMS: 
                        <input
                            type="text"
                            name="acquisitionMethodsHRMS"
                            ref={this.acquisitionMethodsHRMS}
                        />
                    </label>
                    <label>
                        Source: 
                        <input
                            type="text"
                            name="acquisitionMethodsSource"
                            //value={this.state.acquisitionMethodsSource}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Mode: 
                        <select
                            name="acquisitionMethodsMode"
                            value={this.state.acquisitionMethodsMode}
                            onChange={this.handleInputChange} >
                            <option value="HRMS">HRMS</option>
                            <option value="IDA">DDA</option>
                            <option value="SWATH">SWATH</option>
                        </select>
                    </label>
                    <label>
                        Source Gas 1:
                            <input
                                type="range"
                                name="acquisitionMethodsSourceGas1"
                                value={this.state.acquisitionMethodsSourceGas1}
                                onChange={this.handleInputChange}
                                min="-8000" max="8000" value="90" step="2"
                            />
                            <input
                                type="number"
                                name="acquisitionMethodsSourceGas1Display"
                                value={this.state.acquisitionMethodsSourceGas1}
                                onChange={this.handleInputChange}
                            />
                    </label>
                    <label>
                        Source Gas 2:
                            <input
                                type="range"
                                name="acquisitionMethodsSourceGas2"
                                value={this.state.acquisitionMethodsSourceGas2}
                                onChange={this.handleInputChange}
                                min="0" max="150" value="90" step="2"
                            />
                            <input
                                type="number"
                                name="acquisitionMethodsSourceGas2Display"
                                value={this.state.acquisitionMethodsSourceGas2}
                                onChange={this.handleInputChange}
                            />
                    </label>
                    <label>
                        Curtain Gas:
                            <input
                                type="text"
                                name="acquisitionMethodsCurtainGas"
                                value={this.state.acquisitionMethodsCurtainGas}
                                onChange={this.handleInputChange}
                            />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Choose Chromatography System</legend>
                    <label>
                        Chromatography System:
                        <input
                            type="text"
                            name="chromatographySystem"
                            value={this.state.chromatographySystem}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Oven Temp deg C:
                        <input
                            type="text"
                            name="chromatographySystemOvenTemp"
                            value={this.state.chromatographySystemOvenTemp}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Injection Volumne (micro L):
                        <input
                            type="text"
                            name="chromatographySystemInjectionVolumne"
                            value={this.state.chromatographySystemInjectionVolumne}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Pre-Injection Column:
                        <input
                            type="text"
                            name="chromatographySystemPreInjectionColumn"
                            value={this.state.chromatographySystemPreInjectionColumn}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Analytical Column:
                        <input
                            type="text"
                            name="chromatographySystemAnalyticalColumn"
                            value={this.state.chromatographySystemAnalyticalColumn}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Mobile Phase A:
                        <input
                            type="text"
                            name="chromatographySystemMobilePhaseA"
                            value={this.state.chromatographySystemMobilePhaseA}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Mobile Phase B:
                        <input
                            type="text"
                            name="chromatographySystemMobilePhaseB"
                            value={this.state.chromatographySystemMobilePhaseB}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </fieldset>
                
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">The table header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Step Time (min)</td>
                            <td>Flow (ml)</td>
                            <td>Mobile Phase A (%)</td>
                            <td>Mobile Phase B (%)</td>
                            <td>Mobile Phase B Curve</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">The table footer</td>
                        </tr>
                    </tfoot>
                </table>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}