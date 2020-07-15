import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    
    return (
      
      <div className="App">
        <h1 id="title2">Precios Indice General Precios Mayoreo Ciudad México 1877-1939</h1>
        <table id="Table">
          <tr>
            <th>Año</th>
            <th>Precio</th>
          </tr>
          <tr>
            <td>1877</td>
            <td>68.7</td>
          </tr>
          <tr>
            <td>1886</td>
            <td>77.9</td>
          </tr>
          <tr>
            <td>1887</td>
            <td>68.8</td>
          </tr>
          <tr>
            <td>1888</td>
            <td>81</td>
          </tr>
          <tr>
            <td>1889</td>
            <td>87.5</td>
          </tr>
          <tr>
            <td>1890</td>
            <td>85.3</td>
          </tr>
          <tr>
            <td>1891</td>
            <td>84.8</td>
          </tr>
          <tr>
            <td>1892</td>
            <td>97.7</td>
          </tr>
          <tr>
            <td>1893</td>
            <td>105.7</td>
          </tr>
          <tr>
            <td>1894</td>
            <td>93.2</td>
          </tr>
          <tr>
            <td>1895</td>
            <td>93.1</td>
          </tr>
          <tr>
            <td>1896</td>
            <td>102.2</td>
          </tr>
          <tr>
            <td>1897</td>
            <td>102.8</td>
          </tr>
          <tr>
            <td>1898</td>
            <td>88.5</td>
          </tr>
          <tr>
            <td>1899</td>
            <td>85.5</td>
          </tr>
          <tr>
            <td>1900</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1901</td>
            <td>122.8</td>
          </tr>
          <tr>
            <td>1902</td>
            <td>120.8</td>
          </tr>
          <tr>
            <td>1903</td>
            <td>125.7</td>
          </tr>
          <tr>
            <td>1904</td>
            <td>106.8</td>
          </tr>
          <tr>
            <td>1905</td>
            <td>121.3</td>
          </tr>
          <tr>
            <td>1906</td>
            <td>135.9</td>
          </tr>
          <tr>
            <td>1907</td>
            <td>133.9</td>
          </tr>
          <tr>
            <td>1908</td>
            <td>131.9</td>
          </tr>
          <tr>
            <td>1909</td>
            <td>143.6</td>
          </tr>
          <tr>
            <td>1910</td>
            <td>165.7</td>
          </tr>
          <tr>
            <td>1911</td>
            <td>163.5</td>
          </tr>
          <tr>
            <td>1939</td>
            <td>343.2</td>
          </tr>
        </table>
        <div><h1></h1></div>
        <button class="button button1" onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;
