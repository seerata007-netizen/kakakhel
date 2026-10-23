const paths = {
  food: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2M9 13h6M12 10v6"/></>,
  health: <><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/></>,
  education: <><path d="M12 5C8 2 3 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-4-2-7-1-10 1ZM12 5v15"/></>,
  people: <><circle cx="9" cy="7" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4M17 4a3 3 0 0 1 0 6M17 13a5 5 0 0 1 4 5v3"/></>,
  camera: <><path d="M3 7h4l2-3h6l2 3h4v14H3V7Z"/><circle cx="12" cy="13" r="4"/></>,
  heart: <path d="m12 21-8-8C-3 5 7-1 12 6c5-7 15-1 8 7l-8 8Z"/>,
  check: <><path d="M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7l-9-4Z"/><path d="m8 12 3 3 5-6"/></>,
};
export function Icon({name,className=''}) {return <svg className={`line-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.people}</svg>;}
