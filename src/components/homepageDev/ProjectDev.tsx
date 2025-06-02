export const ProjectDev = () => {
  return (
    <div className="font-geistmono text-white">
      <article className="group -mx-2 overflow-hidden rounded border-b border-gray-200 px-2 py-3 transition-all hover:bg-gray-100/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/aniqatc/moji-canvas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              moji-canvas
            </a>
            <p className="text-highlight-green flex items-center gap-1">
              <span className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                </svg>
              </span>{' '}
              <span className="w-0 overflow-hidden text-xs transition-[width] duration-500 ease-in-out group-hover:w-full">
                complete
              </span>
            </p>
          </div>
          <div className="text-gray-3 group-hover:text-gray-6 -mt-1 mr-1 flex items-center gap-1">
            <a
              href="https://moji.aniqa.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
                  opacity="0.2"
                ></path>
                <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
              </svg>
              <span className="w-0 overflow-hidden transition-[width] duration-500 ease-in-out hover:text-white hover:underline group-hover:w-9">
                demo
              </span>
            </a>
            <a
              href="https://github.com/aniqatc/moji-canvas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                  opacity="0.2"
                ></path>
                <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
              </svg>
              <span className="-ml-0.5 hidden w-0 overflow-hidden transition-[width] duration-500 ease-in-out hover:text-white hover:underline group-hover:w-9 [@media(min-width:355px)]:block">
                repo
              </span>
            </a>
          </div>
        </div>
        <div className="s:flex-nowrap flex flex-wrap items-center justify-between gap-3 text-xs">
          <p className="s:w-[45ch] mb-auto mt-1 w-full">
            an interactive emoji-based sticker canvas
          </p>
        </div>
      </article>
    </div>
  )
}
