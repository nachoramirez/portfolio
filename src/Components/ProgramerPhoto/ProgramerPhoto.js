import React from 'react'
import styled, { keyframes } from 'styled-components'

const CrazyEyes = keyframes`
  0%{
    transform: translate(0)
  } 50% {
    transform: translate(12px)
  } 100% {
    transform: translate(0)
  }
`
export const getCoffee = keyframes`
  0% { 
    transform: rotate(-3deg);
  } 50% {
    transform: rotate(40deg);
  } 100% {
    transform: rotate(-3deg);
  }
`

export const LeftArm = styled.svg`
  & path {
    transform-origin: 10% 60%;
    animation-delay: 12s;
    animation: ${getCoffee} 10s infinite;
  }
`

export const Pupil = styled.ellipse`
  animation: ${CrazyEyes} 3s infinite;
`

const ProgramerPhoto = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="443"
      height="386"
      fill="none"
      viewBox="0 0 443 386"
    >
      <g>
        <path
          fill="#FFB7B7"
          d="M101 124.443a44.837 44.837 0 0053.587 43.977 44.836 44.836 0 0032.678-61.136 44.839 44.839 0 00-41.426-27.68A44.73 44.73 0 00101 124.22v.223z"
        ></path>

        <path
          fill="#A17950"
          d="M196.63 87.197a30.362 30.362 0 01-8.596-10.446 14.123 14.123 0 00-2.969-4.15l-8.478 6.52 5.181-9.025c-13.27-8.021-39.183-3.76-39.183-3.76-26.957-14.355-36.855 3.563-40.306 14.927a25.047 25.047 0 01-6.996 10.7c-6.65 6.341 3.822 18.674 3.822 18.674v.871l2.499 16.976s2.5-11.247 9.095-19.151c4.159-4.983 10.927-7.946 14.07-7.884 40.57.791 48.251 2.398 48.251 2.398s6.869 3.69 9.902 5.24c9.802 5.009 7.411 23.146 7.411 23.146l7.325-32.191c1.691-7.803.752-11.383-1.028-12.845z"
        ></path>
        <g>
          <circle cx="130.999" cy="121.5" r="10.5" fill="#fff"></circle>
          <Pupil cx="124.5" cy="122" fill="#220B0B" rx="4.5" ry="4"></Pupil>
        </g>
        <g>
          <circle cx="161.999" cy="121.5" r="10.5" fill="#fff"></circle>
          <Pupil cx="155.5" cy="122" fill="#220B0B" rx="4.5" ry="4"></Pupil>
        </g>
        <path
          fill="#FFB7B7"
          d="M57.166 231.448l-19.284-19.302-15.92 20.831c-2.59 3.431-4.056 7.603-4.093 11.647-.037 4.045 1.357 7.651 3.893 10.068a10.916 10.916 0 004.698 2.643c1.774.481 3.688.534 5.627.157 1.939-.378 3.863-1.179 5.656-2.355 1.794-1.176 3.421-2.703 4.783-4.49l14.926-19.169-.286-.03z"
        ></path>
        <path
          fill="#F50057"
          d="M85 280.5L81 226l-13.237-17.145L48 213l4-10.5L77.5 181l35.307-1H180.5l30 1 16 17.472L229 213l-25.5-4.145L198 226l3 80v28H85v-53.5z"
        ></path>
        <path
          fill="#FFB7B7"
          d="M126.211 310.399c2.988 1.24 3.976 2.838 3.976 2.838a4.954 4.954 0 013.848.735 4.95 4.95 0 012.11 3.309l.328 1.996a4.995 4.995 0 01-.789 3.593 4.974 4.974 0 01-3.034 2.071l-.147.033a43.944 43.944 0 01-15.722 4.378c-11.712.989-17.624-4.022-17.648-7.689-.023-3.467 13.719-5.339 18.809-6.094l-5.153-2.19a1.627 1.627 0 01-.973-1.73 1.627 1.627 0 011.418-1.389l6.028-.719a13.91 13.91 0 016.949.858z"
        ></path>
        <path
          fill="#FFB7B7"
          d="M206.102 309.653l-73.598 15.314-3.429-12.662 71.965-27.81a12.763 12.763 0 0113.514 5.767 12.852 12.852 0 011.785 4.877 12.871 12.871 0 01-2.211 9.318 12.811 12.811 0 01-8.026 5.196z"
        ></path>
        <path
          fill="#FFB7B7"
          d="M193.404 277.02l25.464 1.66-2.476 19.939a12.815 12.815 0 01-4.653 8.308 12.731 12.731 0 01-9.083 2.783 12.716 12.716 0 01-11.167-9.224c-.469-1.655-.6-3.39-.385-5.098l2.086-18.52.214.152z"
        ></path>
        <path
          fill="#F50057"
          d="M229.137 214.499c-.86 25.085-.561 55.806-.529 60.273l-28.318 1.488-.88-62.776c.028-1.86.47-3.69 1.299-5.377a13.49 13.49 0 013.521-4.432 14.89 14.89 0 015.166-2.762 16.007 16.007 0 015.965-.639c3.825.308 7.394 1.96 9.961 4.611s3.934 6.096 3.815 9.614z"
        ></path>
        <path
          fill="#FF8A9E"
          d="M191.255 276.891l29.784 2.61.918-9.939-29.496-2.288-1.206 9.617z"
        ></path>
        <path
          fill="#F50057"
          d="M67.468 185.838c-12.337 13.669-28.592 27.73-30.973 30.014l27.792 23.059 33.876-31.835c.954-.984 1.473-2.28 1.526-3.806.054-1.526-.36-3.251-1.216-5.069s-2.135-3.689-3.76-5.5c-1.624-1.81-3.56-3.521-5.686-5.027-4.02-2.85-3.165-3.853-7.147-4.498-3.983-.645-14.412 2.662-14.412 2.662z"
        ></path>
        <path
          fill="#E6E6E6"
          d="M331.897 294.998a10.002 10.002 0 00-6.172-9.237 9.992 9.992 0 00-10.895 2.167 9.996 9.996 0 007.069 17.067c.125 0 .245-.014.369-.018a88.978 88.978 0 013.923 24.788 78.785 78.785 0 01-.717 12.535c-.435 2.947-1.247 6.327-4.172 7.704-2.182 1.026-.281 4.259 1.892 3.237 3.299-1.552 4.904-5.032 5.624-8.432a66.666 66.666 0 001.128-13.3 92.566 92.566 0 00-4.017-27.366 9.992 9.992 0 005.968-9.145z"
        ></path>
        <path
          fill="#FF8A9E"
          d="M59.235 237.82l-25.96-21.723 5.503-5.013 25.539 21.66-5.082 5.076z"
        ></path>
        <LeftArm>
          <path
            fill="#F0F0F0"
            d="M159.004 155.011l-30.034 12.871a5.316 5.316 0 00-1.788 1.247 5.038 5.038 0 00-1.105 1.836 8.18 8.18 0 00-3.253 1.598 7.844 7.844 0 00-2.202 2.819 7.298 7.298 0 00-.668 3.424 6.963 6.963 0 001.013 3.28c.605.99 4.353 6.707 4.353 6.707s8.649 15.64 10.04 16.161c2.048.238 3.248.096 4.485-.434l3.617-1.55 5.348 6.275a4.853 4.853 0 002.669 1.539 5.295 5.295 0 003.16-.327l19.527-8.368a5.3 5.3 0 002.415-2.063c.566-.911.82-1.96.726-2.994l-11.355-38.196a4.59 4.59 0 00-.739-2.113 4.7 4.7 0 00-1.662-1.527 5.044 5.044 0 00-2.229-.615 5.338 5.338 0 00-2.318.43zm-22.42 46.442c-1.391-.521-10.638-16.649-10.638-16.649l-2.108-3.561s-1.66-3.056-1.093-4.368c.567-1.312 1.594-2.544 2.944-3.122l.328-.141c.367.855.552 1.252.931 1.939l13.396 24.29c-.579.741-2.639 1.503-3.76 1.612z"
          />
          <path
            fill="#FFB7B7"
            d="M100.78 195.876c-.945 2.403-1.19 5.109-.707 7.785a6.923 6.923 0 00-1.981 2.246 7.817 7.817 0 00-.93 2.98 8.731 8.731 0 00.27 3.23 9.084 9.084 0 001.43 2.958l1.949 2.668c1.221 1.678 2.958 2.842 4.853 3.25 1.895.409 3.805.033 5.338-1.052l.193-.068c7.606-2.786 14.543-7.122 20.454-12.786 12.676-12.178 6.857-18.665 2.851-22.964-4.006-4.3-13.748 3.465-19.628 8.363l2.594-8.363a2.82 2.82 0 00-.048-1.643 2.941 2.941 0 00-.945-1.372 2.52 2.52 0 00-1.473-.569 2.182 2.182 0 00-1.431.456l-6.732 5.986c-2.743 2.291-4.829 5.354-6.057 8.895z"
          ></path>
          <path
            fill="#FFB7B7"
            d="M48.958 266.5l65.918-48.609-8.325-13.96-75.407 36.308c-1.537 1.12-2.812 2.597-3.747 4.341-.934 1.743-1.508 3.715-1.686 5.795-.179 2.08.043 4.223.65 6.298a18.182 18.182 0 002.88 5.766c2.437 3.276 5.851 5.529 9.527 6.286 3.676.757 7.328-.04 10.19-2.225z"
          ></path>
        </LeftArm>
        <path
          fill="#E6E6E6"
          d="M328.717 355.243s-13.405-32.998 26.811-57.746l-26.811 57.746z"
        ></path>
        <path
          fill="#E6E6E6"
          d="M327.998 354.642s-4.089-23.519-35.74-23.317l35.74 23.317z"
        ></path>
        <path
          fill="#F0F0F0"
          d="M350.426 383.527h-54.963a5.623 5.623 0 01-5.055-3.162l-11.967-24.598a5.628 5.628 0 01.29-5.441 5.622 5.622 0 014.766-2.64h78.895a5.617 5.617 0 014.766 2.64 5.62 5.62 0 01.289 5.44l-11.966 24.598a5.621 5.621 0 01-5.055 3.163z"
        ></path>
        <path
          fill="#3F3D56"
          d="M277.436 374.585a9.65 9.65 0 01-9.65 9.65H9.65a9.65 9.65 0 010-19.3h2.865a6.623 6.623 0 01-.253-1.767V231.381a8.378 8.378 0 018.38-8.381h236.151a8.378 8.378 0 018.381 8.381v131.787a6.208 6.208 0 01-.254 1.766h2.865a9.644 9.644 0 016.824 2.827 9.65 9.65 0 012.827 6.824z"
        ></path>
        <path
          fill="#fff"
          d="M166.717 300.034a14.917 14.917 0 1114.917-14.917 14.932 14.932 0 01-14.917 14.917zm0-27.335a12.422 12.422 0 00-11.472 7.666 12.416 12.416 0 0021.797 11.65 12.421 12.421 0 002.093-6.898 12.433 12.433 0 00-12.418-12.418z"
        ></path>
        <path
          fill="#fff"
          d="M161.718 293.785c7.548 0 13.667-6.119 13.667-13.668 0-7.548-6.119-13.667-13.667-13.667s-13.667 6.119-13.667 13.667c0 7.549 6.119 13.668 13.667 13.668z"
        ></path>
      </g>
    </svg>
  )
}

export default ProgramerPhoto
