/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from "react"

export const ChatIcon = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M2.67789 11.394C2.88828 11.6049 2.99363 11.8988 2.96523 12.1954C2.90159 12.8601 2.75502 13.5519 2.56677 14.1945C3.96166 13.8721 4.81358 13.4981 5.20082 13.3019C5.42062 13.1905 5.67381 13.1642 5.91182 13.228C6.56966 13.4044 7.27076 13.5 8 13.5C11.9956 13.5 15 10.6925 15 7.5C15 4.30754 11.9956 1.5 8 1.5C4.0044 1.5 1 4.30754 1 7.5C1 8.96809 1.6173 10.3304 2.67789 11.394ZM2.18489 15.2989C2.17816 15.3003 2.17142 15.3016 2.16466 15.3029C2.07283 15.321 1.97922 15.3388 1.88382 15.3563C1.75 15.3808 1.61264 15.4047 1.47172 15.4277C1.27271 15.4603 1.12037 15.2521 1.19898 15.0664C1.25034 14.9451 1.30097 14.8179 1.3503 14.6861C1.38164 14.6023 1.41245 14.5167 1.44259 14.4294C1.44389 14.4256 1.44518 14.4219 1.44648 14.4181C1.69422 13.6984 1.89596 12.8711 1.96979 12.1001C0.743061 10.8699 0 9.26087 0 7.5C0 3.63401 3.58172 0.5 8 0.5C12.4183 0.5 16 3.63401 16 7.5C16 11.366 12.4183 14.5 8 14.5C7.18324 14.5 6.39508 14.3929 5.65284 14.1939C5.13337 14.4571 4.01434 14.9363 2.18489 15.2989Z" fill={fill || '#425466'}/>
	</svg>
)

export const UserIcon = ({fill, sx}) => (
	<svg sx={sx} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M10.6667 4.5C10.6667 5.97276 9.47276 7.16667 8 7.16667C6.52724 7.16667 5.33333 5.97276 5.33333 4.5C5.33333 3.02724 6.52724 1.83333 8 1.83333C9.47276 1.83333 10.6667 3.02724 10.6667 4.5ZM8 8.5C10.2091 8.5 12 6.70914 12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5C4 6.70914 5.79086 8.5 8 8.5ZM16 15.1667C16 16.5 14.6667 16.5 14.6667 16.5H1.33333C1.33333 16.5 0 16.5 0 15.1667C0 13.8333 1.33333 9.83333 8 9.83333C14.6667 9.83333 16 13.8333 16 15.1667ZM14.6666 15.162C14.6647 14.833 14.4616 13.8473 13.5572 12.9428C12.6875 12.0731 11.0521 11.1667 7.99999 11.1667C4.94784 11.1667 3.31247 12.0731 2.4428 12.9428C1.53834 13.8473 1.33523 14.833 1.33333 15.162H14.6666Z" fill={fill}/>
	</svg>
)

export const LogoutIcon = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M6 13C6 13.2761 6.22386 13.5 6.5 13.5L14.5 13.5C14.7761 13.5 15 13.2761 15 13L15 4C15 3.72386 14.7761 3.5 14.5 3.5L6.5 3.5C6.22386 3.5 6 3.72386 6 4L6 6C6 6.27614 5.77614 6.5 5.5 6.5C5.22386 6.5 5 6.27614 5 6L5 4C5 3.17157 5.67157 2.5 6.5 2.5L14.5 2.5C15.3284 2.5 16 3.17157 16 4L16 13C16 13.8284 15.3284 14.5 14.5 14.5L6.5 14.5C5.67157 14.5 5 13.8284 5 13L5 11C5 10.7239 5.22386 10.5 5.5 10.5C5.77614 10.5 6 10.7239 6 11L6 13Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M0.146446 8.85355C-0.0488157 8.65829 -0.0488157 8.34171 0.146446 8.14645L3.14645 5.14645C3.34171 4.95118 3.65829 4.95118 3.85355 5.14645C4.04882 5.34171 4.04882 5.65829 3.85355 5.85355L1.70711 8L10.5 8C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9L1.70711 9L3.85355 11.1464C4.04882 11.3417 4.04882 11.6583 3.85355 11.8536C3.65829 12.0488 3.34171 12.0488 3.14645 11.8536L0.146446 8.85355Z" fill={fill}/>
	</svg>
)

export const GlobeIcon = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M0.25 8C0.25 3.58172 3.83172 0 8.25 0C12.6683 0 16.25 3.58172 16.25 8C16.25 12.4183 12.6683 16 8.25 16C3.83172 16 0.25 12.4183 0.25 8ZM7.75
		 1.07655C7.08057 1.28128 6.41462 1.89722 5.86275 2.93199C5.68997 3.25594 5.533 3.61363 5.39499 3.99999H7.75V1.07655ZM4.33954 3.99999H2.50469C3.26629 2.90813 4.33119 2.04354 5.57726 1.52835C5.35862
		  1.81241 5.15911 2.1263 4.98039 2.4614C4.73325 2.92479 4.51796 3.44139 4.33954 3.99999ZM3.75845 7.49999H1.26758C1.33035 6.61049 1.55933 5.76687 1.92363 4.99999H4.07001C3.8957 5.7817 3.78819
		  6.62317 3.75845 7.49999ZM5.09686 4.99999H7.75V7.49999H4.75906C4.79152 6.60778 4.91006 5.76497 5.09686 4.99999ZM8.75 4.99999V7.49999H11.7409C11.7085 6.60778 11.5899 5.76497 11.4031
		   4.99999H8.75ZM4.75906 8.49999H7.75V11H5.09686C4.91006 10.235 4.79152 9.39221 4.75906 8.49999ZM8.75 8.49999V11H11.4031C11.5899 10.235 11.7085 9.39221 11.7409 8.49999H8.75ZM5.39499
		    12H7.75V14.9234C7.08057 14.7187 6.41462 14.1028 5.86275 13.068C5.68997 12.744 5.533 12.3864 5.39499 12ZM5.57726 14.4716C5.35863 14.1876 5.15911 13.8737 4.98039 13.5386C4.73325 13.0752
		     4.51796 12.5586 4.33954 12H2.50469C3.26629 13.0919 4.33119 13.9565 5.57726 14.4716ZM4.07001 11H1.92363C1.55933 10.2331 1.33035 9.3895 1.26758 8.49999H3.75845C3.78819 9.37682 3.8957
		      10.2183 4.07001 11ZM10.9227 14.4716C12.1688 13.9565 13.2337 13.0919 13.9953 12H12.1604C11.982 12.5586 11.7667 13.0752 11.5196 13.5386C11.3409 13.8737 11.1414 14.1876 10.9227 14.4716ZM8.75
		       12H11.105C10.967 12.3864 10.81 12.744 10.6372 13.068C10.0854 14.1028 9.41942 14.7187 8.75 14.9234V12ZM12.43 11H14.5764C14.9407 10.2331 15.1696 9.3895 15.2324 8.49999H12.7415C12.7118
		        9.37682 12.6043 10.2183 12.43 11ZM15.2324 7.49999H12.7415C12.7118 6.62317 12.6043 5.7817 12.43 4.99999H14.5764C14.9407 5.76687 15.1696 6.61049 15.2324 7.49999ZM11.5196 2.4614C11.7667
		        2.92479 11.982 3.44139 12.1604 3.99999H13.9953C13.2337 2.90812 12.1688 2.04353 10.9227 1.52835C11.1414 1.81241 11.3409 2.1263 11.5196 2.4614ZM11.105 3.99999H8.75V1.07655C9.41942 1.28128
		         10.0854 1.89722 10.6372 2.93199C10.81 3.25594 10.967 3.61363 11.105 3.99999Z" fill={fill}/>
	</svg>
)

export const PlusIcon = ({fill, sx, className}) => (
	<svg sx={sx} className={className} width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M6 0C6.66274 0 7.2 0.537258 7.2 1.2V4.8H10.8C11.4627 4.8 12 5.33726 12 6C12 6.66274 11.4627 7.2 10.8 7.2H7.2V10.8C7.2 11.4627 6.66274 12 6 12C5.33726 12 4.8 11.4627 4.8 10.8V7.2H1.2C0.537258 7.2 0 6.66274 0 6C0 5.33726 0.537258 4.8 1.2 4.8H4.8V1.2C4.8 0.537258 5.33726 0 6 0Z" fill={fill}/>
	</svg>
)
export const PersonLineFill = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M1.25 14C1.25 14 0.25 14 0.25 13C0.25 12 1.25 9 6.25 9C11.25 9 12.25 12 12.25 13C12.25 14 11.25 14 11.25 14H1.25Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M6.25 8C7.90685 8 9.25 6.65685 9.25 5C9.25 3.34315 7.90685 2 6.25 2C4.59315 2 3.25 3.34315 3.25 5C3.25 6.65685 4.59315 8 6.25 8Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M13.25 9.5C13.25 9.22386 13.4739 9 13.75 9H15.75C16.0261 9 16.25 9.22386 16.25 9.5C16.25 9.77614 16.0261 10 15.75 10H13.75C13.4739 10 13.25 9.77614 13.25 9.5Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M11.25 6.5C11.25 6.22386 11.4739 6 11.75 6H15.75C16.0261 6 16.25 6.22386 16.25 6.5C16.25 6.77614 16.0261 7 15.75 7H11.75C11.4739 7 11.25 6.77614 11.25 6.5Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M11.25 3.5C11.25 3.22386 11.4739 3 11.75 3H15.75C16.0261 3 16.25 3.22386 16.25 3.5C16.25 3.77614 16.0261 4 15.75 4H11.75C11.4739 4 11.25 3.77614 11.25 3.5Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M13.25 12.5C13.25 12.2239 13.4739 12 13.75 12H15.75C16.0261 12 16.25 12.2239 16.25 12.5C16.25 12.7761 16.0261 13 15.75 13H13.75C13.4739 13 13.25 12.7761 13.25 12.5Z" fill={fill}/>
	</svg>
)
export const SelectArrow = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3.07643 4.2662L0.378551 1.18291C0.0603114 0.819206 0.318599 0.25 0.801876 0.25H6.19764C6.68091 0.25 6.9392 0.819205 6.62096 1.18291L3.92308 4.2662C3.69897 4.52232 3.30054 4.52232 3.07643 4.2662Z" fill={fill}/>
	</svg>
)
export const ListIcon = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M14.5 3H1.5C1.22386 3 1 3.22386 1 3.5V12.5C1 12.7761 1.22386 13 1.5 13H14.5C14.7761 13 15 12.7761 15 12.5V3.5C15 3.22386 14.7761 3 14.5 3ZM1.5 2C0.671573 2 0 2.67157 0 3.5V12.5C0 13.3284 0.671573 14 1.5 14H14.5C15.3284 14 16 13.3284 16 12.5V3.5C16 2.67157 15.3284 2 14.5 2H1.5Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M5 8C5 7.72386 5.22386 7.5 5.5 7.5H12.5C12.7761 7.5 13 7.72386 13 8C13 8.27614 12.7761 8.5 12.5 8.5H5.5C5.22386 8.5 5 8.27614 5 8Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M5 5.5C5 5.22386 5.22386 5 5.5 5H12.5C12.7761 5 13 5.22386 13 5.5C13 5.77614 12.7761 6 12.5 6H5.5C5.22386 6 5 5.77614 5 5.5Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M5 10.5C5 10.2239 5.22386 10 5.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H5.5C5.22386 11 5 10.7761 5 10.5Z" fill={fill}/>
		<circle cx="3.5" cy="5.5" r="0.5" fill={fill}/>
		<circle cx="3.5" cy="8" r="0.5" fill={fill}/>
		<circle cx="3.5" cy="10.5" r="0.5" fill={fill}/>
	</svg>
)

export const TrashFill = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.287454 2.22521L1.97147 12.3293C2.1322 13.2937 2.96658 14.0005 3.94425 14.0005H8.55575C9.53342 14.0005 10.3678 13.2937 10.5285 12.3293L12.2125 2.22521C11.8775 3.224 9.33579 4.00049 6.25 4.00049C3.16421 4.00049 0.622496 3.224 0.287454 2.22521Z" fill={fill}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M11.1506 2.00049C10.9706 1.86127 10.6531 1.69387 10.1764 1.53496C9.21755 1.21534 7.82928 1.00049 6.25 1.00049C4.67072 1.00049 3.28245 1.21534 2.32359 1.53496C1.84686 1.69387 1.52937 1.86127 1.34935 2.00049C1.52937 2.13971 1.84686 2.30711 2.32359 2.46602C3.28245 2.78564 4.67072 3.00049 6.25 3.00049C7.82928 3.00049 9.21755 2.78564 10.1764 2.46602C10.6531 2.30711 10.9706 2.13971 11.1506 2.00049ZM6.25 4.00049C9.56371 4.00049 12.25 3.10506 12.25 2.00049C12.25 0.895919 9.56371 0.000488281 6.25 0.000488281C2.93629 0.000488281 0.25 0.895919 0.25 2.00049C0.25 3.10506 2.93629 4.00049 6.25 4.00049Z" fill={fill}/>
	</svg>
)

export const Pencil = ({fill, sx}) => (
	<svg sx={sx} width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M12.3965 0.146569C12.5917 -0.0486935 12.9083 -0.0486935 13.1036 0.146569L16.1036 3.14657C16.2988 3.34183 16.2988 3.65841 16.1036 3.85368L6.10357 13.8537C6.05569 13.9016 5.99858 13.9392 5.93571 13.9644L0.93571 15.9644C0.750001 16.0386 0.537892 15.9951 0.396461 15.8537C0.25503 15.7122 0.211493 15.5001 0.285776 15.3144L2.28578 10.3144C2.31092 10.2516 2.34858 10.1944 2.39646 10.1466L12.3965 0.146569ZM11.4571 2.50012L13.75 4.79302L15.0429 3.50012L12.75 1.20723L11.4571 2.50012ZM13.0429 5.50012L10.75 3.20723L4.25001 9.70723V10.0001H4.75001C5.02616 10.0001 5.25001 10.224 5.25001 10.5001V11.0001H5.75001C6.02616 11.0001 6.25001 11.224 6.25001 11.5001V12.0001H6.54291L13.0429 5.50012ZM3.28167 10.6756L3.17614 10.7811L1.64754 14.6026L5.46903 13.074L5.57456 12.9685C5.38496 12.8974 5.25001 12.7145 5.25001 12.5001V12.0001H4.75001C4.47387 12.0001 4.25001 11.7763 4.25001 11.5001V11.0001H3.75001C3.53561 11.0001 3.35272 10.8652 3.28167 10.6756Z" fill={fill}/>
	</svg>
)
