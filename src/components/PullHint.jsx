export function PullHint({
  hidden = false,
  
  padding = '1.5rem',     

  gap = '2rem',    
  className = '',
}) {
 

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');`}</style>

      <div
        aria-hidden="true"
        
        className={[
          'pointer-events-none z-[4] flex flex-row-reverse items-end gap-1 select-none',
          'text-[rgba(160,160,140,0.75)] transition-all duration-500 ease-out absolute left-12.5 top-21.25',
          ' ',
          hidden ? '-translate-y-1.5 opacity-0' : 'opacity-100',
          className,
        ].join(' ')}
      >
        <span className="translate-y-2 rotate-[8deg] text-center font-['Caveat',_'Comic_Sans_MS',_cursive] text-[1.6rem] leading-none font-semibold">
          pull the
          <br />
          cord!
        </span>

        <svg
          viewBox="0 0 100 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-2 h-auto w-[3.5rem] -scale-x-100"
        >
          <path
            d="M6 60 C 32 64, 74 54, 90 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M97 6 L 78 14 L 98 30 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  )
}