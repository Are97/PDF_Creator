module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result</title>
      <style>
        #Table {
          font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        #Table td, #Table th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #Table tr:nth-child(even){background-color: #f2f2f2;}
        
        #Table th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: center;
          background-color: #FE346E;
          color: white;
        }
        </style>
       </head>
       <body>
          <div className="App">
            <h1>Precios Indice General Precios Mayoreo Ciudad México 1877-1939</h1>
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
          </div>
       </body>
    </html>
    `;
};