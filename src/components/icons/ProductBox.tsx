import { SVGProps } from "react";

export default function ProductBoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path
          d="M9.952.833c.517.022 1.01.141 1.48.358 2.123.942 4.24 1.897 6.35 2.865.195.129.37.28.525.453-1.138.53-2.284 1.047-3.437 1.552a.441.441 0 0 1-.287 0c-2.717-1.275-5.43-2.556-8.14-3.843-.028-.047-.012-.079.048-.096.8-.364 1.604-.722 2.41-1.074C9.25.93 9.6.858 9.953.833Z"
          opacity={0.974}
        />
        <path
          d="M4.51 2.982a335.49 335.49 0 0 1 8.402 3.938c-.71.332-1.426.65-2.148.955-.442.134-.887.15-1.337.048a326.76 326.76 0 0 1-7.663-3.366c-.06-.017-.076-.048-.047-.095.162-.141.33-.277.5-.406.768-.364 1.532-.722 2.293-1.074Z"
          opacity={0.969}
        />
        <path
          d="M.929 5.846a764.905 764.905 0 0 1 7.543 3.318c.25.097.504.168.764.215.008 3.263 0 6.525-.024 9.787a454.91 454.91 0 0 1-6.994-3.127 3.12 3.12 0 0 1-1.36-2.077c-.033-2.61-.033-5.22 0-7.83.014-.099.038-.194.07-.286Z"
          opacity={0.993}
        />
        <path
          d="M18.928 5.846a.21.21 0 0 1 .167.048l.048.239c.032 2.61.032 5.22 0 7.83a3.12 3.12 0 0 1-1.36 2.076 455.206 455.206 0 0 1-6.995 3.128c-.024-3.263-.032-6.525-.024-9.788.26-.047.515-.118.764-.215.793-.362 1.59-.72 2.387-1.074.026.703.066 1.403.12 2.1.286.511.676.607 1.169.287a.768.768 0 0 0 .215-.334l.048-2.721a352.38 352.38 0 0 0 3.46-1.576Z"
          opacity={0.991}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}