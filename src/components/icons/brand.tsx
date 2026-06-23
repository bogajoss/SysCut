import type { IconProps } from "./types";

function OcVercelIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="18"
      viewBox="0 0 76 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vercel</title>
      {/* react-doctor-disable-next-line rendering-svg-precision */}
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
    </svg>
  );
}

export function OcMarbleIcon({ className = "", size = 32 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      fill="none"
      viewBox="0 0 256 256"
    >
      <title>Marble</title>
      <path fill="#202027" d="M0 0h256v256H0z" />
      <path
        fill="#fff"
        d="M116.032 94.016q1.408.26 6.27 9.86 4.86 9.47 11.9 24.576l4.096 8.576a42.4 42.4 0 0 0 4.99-6.784q2.304-3.96 5.76-10.62 3.96-7.56 5.5-9.73 6.14-9.34 13.31-19.84.9-1.41 3.2-1.92a4.8 4.8 0 0 1 1.28-.128q3.072 0 6.78 2.56 3.84 2.56 4.99 5.248a4.8 4.8 0 0 1 .256 1.92q0 1.28-.128 1.92l-.64 2.944q-.256 1.66-.512 3.968a3200 3200 0 0 0-5.89 46.85 56 56 0 0 0-.512 8.064l-.256 4.096a32 32 0 0 0-.128 2.944q0 1.67-.384 2.3-.384.64-1.41.64-.768 0-2.3-.384-4.1-.896-6.27-3.2-2.18-2.43-2.43-6.66-.128-2.18-.128-6.78 0-4.74.256-14.464l.128-7.4.26-10.112q-1.15 1.02-5.89 8.064a328 328 0 0 0-9.09 14.464q-4.48 7.56-5.89 11.65-1.28 3.2-2.56 4.74-1.15 1.54-2.82 1.54-1.54 0-3.97-1.41-6.91-4.22-8.45-11.648a336 336 0 0 0-6.02-23.68 40 40 0 0 0-2.56-6.272q-1.79-3.97-2.3-4.992l-1.66-3.328q-18.68 24.83-25.34 45.57-1.28 4.35-2.43 6.27-1.15 1.79-2.69 1.79-2.43 0-6.91-4.352Q72 158.14 72 154.304q0-2.4.77-4.096a108 108 0 0 1 16-30.08l3.968-5.248a432 432 0 0 0 12.16-16.64q3.072-4.48 8.19-4.48.9 0 2.94.256"
      />
    </svg>
  );
}

export function OcDataBuddyIcon({ className = "", size = 32 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 8 8"
      shapeRendering="crispEdges"
    >
      <title>Data Buddy</title>
      <path d="M0 0h8v8H0z" />
      <path
        fill="#fff"
        d="M1 1h1v6H1zm1 0h4v1H2zm4 1h1v1H6zm0 1h1v1H6zm0 1h1v1H6zm0 1h1v1H6zM2 6h4v1H2zm1-3h1v1H3zm1 1h1v1H4z"
      />
    </svg>
  );
}
