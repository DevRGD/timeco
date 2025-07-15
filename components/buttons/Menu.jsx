export default function Menu({ open, ...props }) {
  return (
    <button
      aria-label="Toggle navigation"
      {...props}
      className={
        'relative h-6 w-6 md:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ' +
        (props.className ?? '')
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="absolute inset-0 h-full w-full"
      >
        <line
          x1="6"
          y1="9"
          x2="18"
          y2="9"
          className={`transition-all duration-300 origin-center ${open ? 'translate-y-[2px] rotate-45' : ''}`}
        />
        <line
          x1="6"
          y1="15"
          x2="18"
          y2="15"
          className={`transition-all duration-300 origin-center ${
            open ? 'translate-y-[-2px] -rotate-45' : 'scale-x-[0.5] translate-x-[3px]'
          }`}
        />
      </svg>
    </button>
  );
}
