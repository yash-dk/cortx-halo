/*
 * CORTX-Halo: Halo Management GUI.
 * Copyright (c) 2022 Seagate Technology LLC and/or its Affiliates
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 * For any questions about this software or licensing,
 * please email opensource@seagate.com.
 */
export const graphImages = {
  magnifyIcon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.23535 8.41174L11.5883 8.41174" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.41187 5.23529L8.41187 11.5882" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.41176 15.8235C12.5052 15.8235 15.8235 12.5052 15.8235 8.41176C15.8235 4.31836 12.5052 1 8.41176 1C4.31836 1 1 4.31836 1 8.41176C1 12.5052 4.31836 15.8235 8.41176 15.8235Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 19L13.7059 13.7059" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  threeDotMenu: `<svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z" fill="#6EBE49" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z" fill="#6EBE49" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z" fill="#6EBE49" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  cluster: {
    online: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4126 5.0185L21.9565 2.33331L24.5004 5.0185" stroke="#6EBE49" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96529 22.4722C6.96529 24.196 5.65436 25.5 4.1495 25.5C2.64464 25.5 1.33371 24.196 1.33371 22.4722C1.33371 20.7484 2.64464 19.4444 4.1495 19.4444C5.65436 19.4444 6.96529 20.7484 6.96529 22.4722Z" stroke="#6EBE49" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#6EBE49" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14948 19.787L4.14948 7.70368C4.14948 6.27937 4.6185 4.9134 5.45336 3.90626C6.28823 2.89912 7.42055 2.33331 8.60123 2.33331C9.78191 2.33331 10.9142 2.89912 11.7491 3.90626C12.584 4.9134 13.053 6.27937 13.053 7.70368V8.30039" stroke="#6EBE49" stroke-width="2"/>
        <path d="M21.9565 3.67593L21.9565 18.4444C21.9565 19.8688 21.4875 21.2347 20.6527 22.2419C19.8178 23.249 18.6855 23.8148 17.5048 23.8148C16.3241 23.8148 15.1918 23.249 14.3569 22.2419C13.5221 21.2347 13.053 19.8688 13.053 18.4444L13.053 17.8477" stroke="#6EBE49" stroke-width="2"/>
        </svg>
        `,
    offline: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>
        `,
    degraded: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.0185L21.9564 2.33331L24.5002 5.0185" stroke="#F2994A" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#F2994A" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#F2994A" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70368C4.14935 6.27937 4.61838 4.9134 5.45324 3.90626C6.28811 2.89912 7.42043 2.33331 8.60111 2.33331C9.78179 2.33331 10.9141 2.89912 11.749 3.90626C12.5838 4.9134 13.0529 6.27937 13.0529 7.70368V8.30039" stroke="#F2994A" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#F2994A" stroke-width="2"/>
        </svg>
        `,
    failed: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>
        `,
    unknown: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01853L21.9564 2.33334L24.5002 5.01853" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#BDBDBD" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#BDBDBD" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70371C4.14935 6.2794 4.61838 4.91343 5.45324 3.90629C6.28811 2.89915 7.42043 2.33334 8.60111 2.33334C9.78179 2.33334 10.9141 2.89915 11.749 3.90629C12.5838 4.91343 13.0529 6.2794 13.0529 7.70371V8.30042" stroke="#BDBDBD" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#BDBDBD" stroke-width="2"/>
        </svg>
        `,
  },
  site: {
    online: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4126 5.0185L21.9565 2.33331L24.5004 5.0185" stroke="#6EBE49" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96529 22.4722C6.96529 24.196 5.65436 25.5 4.1495 25.5C2.64464 25.5 1.33371 24.196 1.33371 22.4722C1.33371 20.7484 2.64464 19.4444 4.1495 19.4444C5.65436 19.4444 6.96529 20.7484 6.96529 22.4722Z" stroke="#6EBE49" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#6EBE49" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14948 19.787L4.14948 7.70368C4.14948 6.27937 4.6185 4.9134 5.45336 3.90626C6.28823 2.89912 7.42055 2.33331 8.60123 2.33331C9.78191 2.33331 10.9142 2.89912 11.7491 3.90626C12.584 4.9134 13.053 6.27937 13.053 7.70368V8.30039" stroke="#6EBE49" stroke-width="2"/>
        <path d="M21.9565 3.67593L21.9565 18.4444C21.9565 19.8688 21.4875 21.2347 20.6527 22.2419C19.8178 23.249 18.6855 23.8148 17.5048 23.8148C16.3241 23.8148 15.1918 23.249 14.3569 22.2419C13.5221 21.2347 13.053 19.8688 13.053 18.4444L13.053 17.8477" stroke="#6EBE49" stroke-width="2"/>
        </svg>`,
    offline: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>
        `,
    degraded: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.0185L21.9564 2.33331L24.5002 5.0185" stroke="#F2994A" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#F2994A" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#F2994A" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70368C4.14935 6.27937 4.61838 4.9134 5.45324 3.90626C6.28811 2.89912 7.42043 2.33331 8.60111 2.33331C9.78179 2.33331 10.9141 2.89912 11.749 3.90626C12.5838 4.9134 13.0529 6.27937 13.0529 7.70368V8.30039" stroke="#F2994A" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#F2994A" stroke-width="2"/>
        </svg>
        `,
    failed: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>
        `,
    unknown: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01853L21.9564 2.33334L24.5002 5.01853" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#BDBDBD" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#BDBDBD" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70371C4.14935 6.2794 4.61838 4.91343 5.45324 3.90629C6.28811 2.89915 7.42043 2.33334 8.60111 2.33334C9.78179 2.33334 10.9141 2.89915 11.749 3.90629C12.5838 4.91343 13.0529 6.2794 13.0529 7.70371V8.30042" stroke="#BDBDBD" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#BDBDBD" stroke-width="2"/>
        </svg>
        `,
  },
  rack: {
    online: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4126 5.0185L21.9565 2.33331L24.5004 5.0185" stroke="#6EBE49" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96529 22.4722C6.96529 24.196 5.65436 25.5 4.1495 25.5C2.64464 25.5 1.33371 24.196 1.33371 22.4722C1.33371 20.7484 2.64464 19.4444 4.1495 19.4444C5.65436 19.4444 6.96529 20.7484 6.96529 22.4722Z" stroke="#6EBE49" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#6EBE49" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14948 19.787L4.14948 7.70368C4.14948 6.27937 4.6185 4.9134 5.45336 3.90626C6.28823 2.89912 7.42055 2.33331 8.60123 2.33331C9.78191 2.33331 10.9142 2.89912 11.7491 3.90626C12.584 4.9134 13.053 6.27937 13.053 7.70368V8.30039" stroke="#6EBE49" stroke-width="2"/>
        <path d="M21.9565 3.67593L21.9565 18.4444C21.9565 19.8688 21.4875 21.2347 20.6527 22.2419C19.8178 23.249 18.6855 23.8148 17.5048 23.8148C16.3241 23.8148 15.1918 23.249 14.3569 22.2419C13.5221 21.2347 13.053 19.8688 13.053 18.4444L13.053 17.8477" stroke="#6EBE49" stroke-width="2"/>
        </svg>
        `,
    offline: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>
        `,
    degraded: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.0185L21.9564 2.33331L24.5002 5.0185" stroke="#F2994A" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#F2994A" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#F2994A" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70368C4.14935 6.27937 4.61838 4.9134 5.45324 3.90626C6.28811 2.89912 7.42043 2.33331 8.60111 2.33331C9.78179 2.33331 10.9141 2.89912 11.749 3.90626C12.5838 4.9134 13.0529 6.27937 13.0529 7.70368V8.30039" stroke="#F2994A" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#F2994A" stroke-width="2"/>
        </svg>
        `,
    failed: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>`,
    unknown: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01853L21.9564 2.33334L24.5002 5.01853" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#BDBDBD" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#BDBDBD" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70371C4.14935 6.2794 4.61838 4.91343 5.45324 3.90629C6.28811 2.89915 7.42043 2.33334 8.60111 2.33334C9.78179 2.33334 10.9141 2.89915 11.749 3.90629C12.5838 4.91343 13.0529 6.2794 13.0529 7.70371V8.30042" stroke="#BDBDBD" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#BDBDBD" stroke-width="2"/>
        </svg>
        `,
  },
  node: {
    online: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4126 5.0185L21.9565 2.33331L24.5004 5.0185" stroke="#6EBE49" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96529 22.4722C6.96529 24.196 5.65436 25.5 4.1495 25.5C2.64464 25.5 1.33371 24.196 1.33371 22.4722C1.33371 20.7484 2.64464 19.4444 4.1495 19.4444C5.65436 19.4444 6.96529 20.7484 6.96529 22.4722Z" stroke="#6EBE49" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96524" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#6EBE49" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14948 19.787L4.14948 7.70368C4.14948 6.27937 4.6185 4.9134 5.45336 3.90626C6.28823 2.89912 7.42055 2.33331 8.60123 2.33331C9.78191 2.33331 10.9142 2.89912 11.7491 3.90626C12.584 4.9134 13.053 6.27937 13.053 7.70368V8.30039" stroke="#6EBE49" stroke-width="2"/>
        <path d="M21.9565 3.67593L21.9565 18.4444C21.9565 19.8688 21.4875 21.2347 20.6527 22.2419C19.8178 23.249 18.6855 23.8148 17.5048 23.8148C16.3241 23.8148 15.1918 23.249 14.3569 22.2419C13.5221 21.2347 13.053 19.8688 13.053 18.4444L13.053 17.8477" stroke="#6EBE49" stroke-width="2"/>
        </svg>
        `,
    offline: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>
        `,
    degraded: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.0185L21.9564 2.33331L24.5002 5.0185" stroke="#F2994A" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#F2994A" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#F2994A" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70368C4.14935 6.27937 4.61838 4.9134 5.45324 3.90626C6.28811 2.89912 7.42043 2.33331 8.60111 2.33331C9.78179 2.33331 10.9141 2.89912 11.749 3.90626C12.5838 4.9134 13.0529 6.27937 13.0529 7.70368V8.30039" stroke="#F2994A" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#F2994A" stroke-width="2"/>
        </svg>
        `,
    failed: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01856L21.9564 2.33337L24.5002 5.01856" stroke="#EB5757" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.1961 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.1961 1.33359 22.4722C1.33359 20.7484 2.64452 19.4445 4.14938 19.4445C5.65424 19.4445 6.96517 20.7484 6.96517 22.4722Z" stroke="#EB5757" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#EB5757" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.7871L4.14935 7.70374C4.14935 6.27943 4.61838 4.91346 5.45324 3.90632C6.28811 2.89918 7.42043 2.33337 8.60111 2.33337C9.78179 2.33337 10.9141 2.89918 11.749 3.90632C12.5838 4.91346 13.0529 6.27943 13.0529 7.70374V8.30045" stroke="#EB5757" stroke-width="2"/>
        <path d="M21.9564 3.67596L21.9564 18.4445C21.9564 19.8688 21.4874 21.2348 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2348 13.0529 19.8688 13.0529 18.4445L13.0529 17.8478" stroke="#EB5757" stroke-width="2"/>
        </svg>
        `,
    unknown: `<svg width="37" height="37" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4125 5.01853L21.9564 2.33334L24.5002 5.01853" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.96517 22.4722C6.96517 24.196 5.65424 25.5 4.14938 25.5C2.64452 25.5 1.33359 24.196 1.33359 22.4722C1.33359 20.7484 2.64452 19.4444 4.14938 19.4444C5.65424 19.4444 6.96517 20.7484 6.96517 22.4722Z" stroke="#BDBDBD" stroke-width="2"/>
        <mask id="path-3-inside-1" fill="white">
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1"/>
        </mask>
        <rect x="7.96512" y="7.70374" width="10.1754" height="10.7407" rx="1" stroke="#BDBDBD" stroke-width="4" mask="url(#path-3-inside-1)"/>
        <path d="M4.14935 19.787L4.14935 7.70371C4.14935 6.2794 4.61838 4.91343 5.45324 3.90629C6.28811 2.89915 7.42043 2.33334 8.60111 2.33334C9.78179 2.33334 10.9141 2.89915 11.749 3.90629C12.5838 4.91343 13.0529 6.2794 13.0529 7.70371V8.30042" stroke="#BDBDBD" stroke-width="2"/>
        <path d="M21.9564 3.67593L21.9564 18.4444C21.9564 19.8688 21.4874 21.2347 20.6525 22.2419C19.8177 23.249 18.6853 23.8148 17.5047 23.8148C16.324 23.8148 15.1917 23.249 14.3568 22.2419C13.5219 21.2347 13.0529 19.8688 13.0529 18.4444L13.0529 17.8477" stroke="#BDBDBD" stroke-width="2"/>
        </svg>
        `,
  },
};
