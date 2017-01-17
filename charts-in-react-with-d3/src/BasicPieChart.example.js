export default `import React from 'react';
import './BasicPieChart.css'

const BasicPieChart = () =>
  <svg width="960" height="500">
    <g transform="translate(480,250)">
      <g className="arc">
        <path
          d="M1.469576158976824e-14,-240A240,240 0 0,1 107.0492887034484,-214.803281604555L0,0Z"
          style={{ fill: 'rgb(152, 171, 197)' }}
         />
        
        <text
          transform="translate(48.113911736435526,-204.41392197553103)"
          dy=".35em"
        >
          &lt;5
        </text>
      </g>
      
      ...
    </g>
  </svg>
;

export default BasicPieChart;
`;
